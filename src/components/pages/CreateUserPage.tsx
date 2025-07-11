'use client'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

import { CreateUserForm } from '../features/account/create'
import { BorderWrapper } from '../ui/elements'

function CreateUserPage() {
	return (
		<BorderWrapper>
			<CreateUserForm />
		</BorderWrapper>
	)
}

export default withAuth(CreateUserPage, [Permission.UserCreate])
