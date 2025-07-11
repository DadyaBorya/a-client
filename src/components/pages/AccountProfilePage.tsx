'use client'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

import { UserProfile } from '../features/account/profile'
import { BorderWrapper } from '../ui/elements'

function AccountProfilePage() {
	return (
		<BorderWrapper>
			<UserProfile />
		</BorderWrapper>
	)
}

export default withAuth(AccountProfilePage, [Permission.UserRead])
