'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { FullScreenSpinner } from '@/components/ui/elements'

import { useFindUserById, useUserStore } from '@/hooks/user'

import { ROUTES } from '@/libs/constants'

import { BaseUserProfile } from './BaseUserProfile'
import { Sessions } from './Sessions'

export function UserProfile() {
	const params = useParams()
	const router = useRouter()
	const id = params?.id as string
	const { user } = useUserStore()

	useEffect(() => {
		if (user && user.id === id) {
			router.push(ROUTES.ACCOUNT.OWN_PROFILE.path)
		}
	}, [id, user])

	const { data, loading, error } = useFindUserById(id)

	if (!id || !user || loading) return <FullScreenSpinner />

	if (user && user.id === id) return null

	return (
		<>
			<BaseUserProfile data={data} isLoading={loading} error={error} />
			<Sessions id={id} />
		</>
	)
}
