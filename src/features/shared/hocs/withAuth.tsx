'use client'

import { useRouter } from 'next/navigation'
import { JSX, useCallback, useEffect } from 'react'

import { Permission, useFindMeQuery } from '@/graphql/generated/output'

import { FullScreenSpinner } from '@/shared/components/ui'
import { ROUTES } from '@/shared/constants'
import { useUserStore } from '@/shared/stores'

interface WithAuthOptions {
	requiredPermissions?: Permission[]
	includeAll?: boolean
	redirectTo?: string
	blockedRedirectTo?: string
	checkPermissions?: boolean
}

export function withAuth<P extends JSX.IntrinsicAttributes>(
	Component: React.ComponentType<P>,
	options: WithAuthOptions = {}
) {
	const {
		requiredPermissions = [],
		includeAll = true,
		redirectTo = ROUTES.AUTH.LOGIN.path,
		blockedRedirectTo = '/auth/blocked',
		checkPermissions = true
	} = options

	const WrappedComponent = (props: P) => {
		const router = useRouter()
		const { user, setUser, clear } = useUserStore()

		const { data, error, loading } = useFindMeQuery({
			errorPolicy: 'all',
			fetchPolicy: 'network-only',
			notifyOnNetworkStatusChange: true
		})

		const checkAuthorization = useCallback(() => {
			if (!user || !checkPermissions) return true

			if (user.isSuperUser) return true

			if (!requiredPermissions.length) return true

			if (includeAll) {
				return requiredPermissions.every(permission =>
					user.permissions.some(p => p === permission)
				)
			} else {
				return requiredPermissions.some(permission =>
					user.permissions.some(p => p === permission)
				)
			}
		}, [user, requiredPermissions, checkPermissions])

		useEffect(() => {
			if (data?.findMe) {
				const {
					id,
					isTotpEnabled,
					permissions,
					username,
					displayName,
					isSuperUser,
					isBlocked
				} = data.findMe

				setUser({
					id,
					isTotpEnabled,
					permissions,
					username,
					displayName,
					isSuperUser,
					isBlocked
				})
			} else if (error && !loading) {
			}
		}, [data, error, loading, setUser, clear])

		useEffect(() => {
			if (loading) return

			if (error || !data?.findMe) {
				router.push(redirectTo)
				return
			}

			if (!user) return

			if (user.isBlocked) {
				router.push(blockedRedirectTo)
				return
			}

			if (!checkAuthorization()) {
				router.replace(ROUTES.FORBIDDEN_PAGE.path)
				return
			}
		}, [
			user,
			loading,
			router,
			checkAuthorization,
			redirectTo,
			blockedRedirectTo
		])

		if (loading || !user) {
			return <FullScreenSpinner />
		}

		return <Component {...props} />
	}

	return WrappedComponent
}
