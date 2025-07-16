'use client'

import { OwnUserProfile } from '@/components/features/account/profile'
import { BorderWrapper } from '@/components/ui/elements'

import withAuth from '@/hooks/auth/withAuth'

function OwnAccountProfilePage() {
	return (
		<BorderWrapper>
			<OwnUserProfile />
		</BorderWrapper>
	)
}

export default withAuth(OwnAccountProfilePage, [])
