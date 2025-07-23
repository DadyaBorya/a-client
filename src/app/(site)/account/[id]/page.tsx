'use client'

import { Permission } from '@/graphql/generated/output'

import { AccountProfile } from '@/features/account/components'
import { withAuth } from '@/features/shared/hocs'
import { BorderLayout } from '@/shared/components/layouts'

const AuthenticatedAccountProfile = withAuth(
	function AccountProfileContent() {
		return (
			<BorderLayout>
				<AccountProfile />
			</BorderLayout>
		)
	},
	{
		requiredPermissions: [Permission.UserRead]
	}
)

export default function AccountProfilePage() {
	return <AuthenticatedAccountProfile />
}
