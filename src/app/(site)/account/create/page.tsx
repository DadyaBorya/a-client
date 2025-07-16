'use client'

import { CreateUserForm } from '@/components/features/account/create'
import { BorderWrapper } from '@/components/ui/elements'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

function CreateUserPage() {
	return (
		<BorderWrapper>
			<CreateUserForm />
		</BorderWrapper>
	)
}

export default withAuth(CreateUserPage, [Permission.UserCreate])
