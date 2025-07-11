'use client'

import { GraphQLFormattedErrorExtensions } from 'graphql'
import { useEffect } from 'react'

import { useFindMeQuery } from '@/graphql/generated/output'

import { useUserStore } from '@/hooks/user'

export function useCurrentUser() {
	const { setIsLoading, setUser } = useUserStore()
	const { data, error, loading } = useFindMeQuery({
		errorPolicy: 'all',
		fetchPolicy: 'cache-and-network',
		notifyOnNetworkStatusChange: true
	})

	const code = error?.cause?.extensions
		? (error.cause.extensions as GraphQLFormattedErrorExtensions).code
		: undefined

	useEffect(() => {
		setIsLoading(loading)
	}, [loading, setIsLoading])

	useEffect(() => {
		if (data) {
			setUser({
				id: data.findMe.id,
				isTotpEnabled: data.findMe.isTotpEnabled,
				permissions: data.findMe.permissions,
				username: data.findMe.username,
				displayName: data.findMe.displayName,
				isSuperUser: data.findMe.isSuperUser,
				isBlocked: data.findMe.isBlocked
			})
		} else {
			setUser(null)
		}
	}, [data, setUser])

	return {
		user: data?.findMe ?? null,
		isLoading: loading,
		error,
		code
	}
}
