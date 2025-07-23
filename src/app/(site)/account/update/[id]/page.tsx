'use client'

import { Permission } from '@/graphql/generated/output'

import { UpdateProfileForm } from '@/features/account'
import { withAuth } from '@/features/shared/hocs'
import { BorderLayout } from '@/shared/components/layouts'

const AuthenticatedUpdateProfileForm = withAuth(
	function UpdateUserContent() {
		return (
			<BorderLayout>
				<UpdateProfileForm />
			</BorderLayout>
		)
	},
	{
		requiredPermissions: [Permission.UserRead, Permission.UserUpdate]
	}
)

export default function UpdateUserPage() {
	return <AuthenticatedUpdateProfileForm />
}
