'use client'

import { Permission } from '@/graphql/generated/output'

import { CreateProfileForm } from '@/features/account'
import { withAuth } from '@/features/shared/hocs'
import { BorderLayout } from '@/shared/components/layouts'

const AuthenticatedCreateProfileForm = withAuth(
	function CreateUserContent() {
		return (
			<BorderLayout>
				<CreateProfileForm />
			</BorderLayout>
		)
	},
	{
		requiredPermissions: [Permission.UserCreate]
	}
)

export default function CreateUserPage() {
	return <AuthenticatedCreateProfileForm />
}
