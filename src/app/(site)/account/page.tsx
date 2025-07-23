'use client'

import { OwnAccountProfile } from '@/features/account'
import { withAuth } from '@/features/shared/hocs'
import { BorderLayout } from '@/shared/components/layouts'

const AuthenticatedOwnAccountProfile = withAuth(
	function OwnAccountProfileContent() {
		return (
			<BorderLayout>
				<OwnAccountProfile />
			</BorderLayout>
		)
	}
)

export default function OwnAccountProfilePage() {
	return <AuthenticatedOwnAccountProfile />
}
