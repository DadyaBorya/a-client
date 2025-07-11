'use client'

import { useParams } from 'next/navigation'

import { useFindUserById } from '@/hooks/user'

import { BaseUserProfile } from '../base-profile'

export function UserProfile() {
	const params = useParams()
	const id = params?.id as string

	const { data, loading, error } = useFindUserById(id)

	return <BaseUserProfile data={data} isLoading={loading} error={error} />
}
