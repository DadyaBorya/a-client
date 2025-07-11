'use client'

import { useFindMe } from '@/hooks/user'

import { BaseUserProfile } from './BaseUserProfile'
import { OwnSessions } from './OwnSessions'

export function OwnUserProfile() {
	const { data, loading, error } = useFindMe()

	return (
		<>
			<BaseUserProfile data={data} isLoading={loading} error={error} />
			<OwnSessions />
		</>
	)
}
