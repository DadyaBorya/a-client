'use client'

import { useFindMe } from '@/hooks/user'

import { BaseUserProfile } from '../base-profile'

export function OwnUserProfile() {
	const { data, loading, error } = useFindMe()

	return <BaseUserProfile data={data} isLoading={loading} error={error} />
}
