'use client'

import { usePathname, useRouter } from 'next/navigation'
import { JSX, useEffect, useState } from 'react'
import { ComponentType } from 'react'
import { toast } from 'sonner'

import { FullScreenSpinner } from '@/components/ui/elements'

import { Permission } from '@/graphql/generated/output'

import { useCurrentUser, useUserStore } from '@/hooks/user'

import { ROUTES, TOTP_NOT_ENABLED } from '@/libs/constants'

function withAuth<P extends JSX.IntrinsicAttributes>(
	WrappedComponent: ComponentType<P>,
	permissions: Permission[],
	all: boolean = true
) {
	return function AuthenticatedComponent(props: P) {
		const router = useRouter()
		const pathname = usePathname()
		const [canRender, setCanRender] = useState(false)

		const { user, isLoading, error, code } = useCurrentUser()
		const { clear } = useUserStore()

		useEffect(() => {
			if (isLoading) return

			if (error) {
				if (code === TOTP_NOT_ENABLED) {
					if (pathname !== ROUTES.AUTH.TOTP_ENABLE.path) {
						router.push(ROUTES.AUTH.TOTP_ENABLE.path)
						toast.error('Помилка', {
							description: error.message
						})
					} else {
						setCanRender(true)
					}
					return
				}

				toast.error(error.message)
				clear()
				router.push(ROUTES.AUTH.LOGIN.path)
				return
			}

			if (!user) {
				router.push(ROUTES.AUTH.LOGIN.path)
				return
			}

			if (permissions.length > 0 && !user.isSuperUser) {
				const hasAllPermissions = all
					? permissions.every(p => user.permissions.includes(p))
					: permissions.some(p => user.permissions.includes(p))

				if (!hasAllPermissions) {
					toast.error('Недостатньо прав доступу')
					router.push(ROUTES.FORBIDDEN_PAGE.path)
					return
				}
			}

			setCanRender(true)
		}, [isLoading, user, error, code, router, pathname])

		if (!canRender) {
			return <FullScreenSpinner />
		}

		return <WrappedComponent {...props} />
	}
}

export default withAuth
