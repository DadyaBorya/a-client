'use client'

import { UserProfile } from '@/components/features/account/profile'
import { BorderWrapper } from '@/components/ui/elements'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

function AccountProfilePage() {
	return (
		<BorderWrapper>
			<UserProfile />
		</BorderWrapper>
	)
}

export default withAuth(AccountProfilePage, [Permission.UserRead])
