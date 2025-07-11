'use client'

import withAuth from '@/hooks/auth/withAuth'

import { OwnUserProfile } from '../features/account/profile'
import { BorderWrapper } from '../ui/elements'

function OwnAccountProfilePage() {
	return (
		<BorderWrapper>
			<OwnUserProfile />
		</BorderWrapper>
	)
}

export default withAuth(OwnAccountProfilePage, [])
