'use client'

import { useParams } from 'next/navigation'

import { FullScreenSpinner } from '@/components/ui/elements'

import { useFindUserById, useUserStore } from '@/hooks/user'

import { BaseUserProfile } from './BaseUserProfile'
import { OwnSessions } from './OwnSessions'
import { Sessions } from './Sessions'

export function UserProfile() {
	const params = useParams()
	const id = params?.id as string
	const { user } = useUserStore()

	const { data, loading, error } = useFindUserById(id)

	if (!id || !user || loading) return <FullScreenSpinner />

	return (
		<>
			<BaseUserProfile data={data} isLoading={loading} error={error} />
			{user && user.id === id ? <OwnSessions /> : <Sessions id={id} />}
		</>
	)
}
