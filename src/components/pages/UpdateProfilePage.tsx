'use client'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

import { UpdateUserForm } from '../features/account/update'
import { BorderWrapper } from '../ui/elements'

function UpdateProfilePage() {
	return (
		<BorderWrapper>
			<UpdateUserForm />
		</BorderWrapper>
	)
}

export default withAuth(UpdateProfilePage, [
	Permission.UserUpdate,
	Permission.UserRead
])
