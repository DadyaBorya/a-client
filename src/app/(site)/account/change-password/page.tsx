'use client'

import { Permission } from '@/graphql/generated/output'

import { ChangePasswordForm } from '@/features/account'
import { withAuth } from '@/features/shared/hocs'
import { BorderLayout } from '@/shared/components/layouts'

const AuthenticatedChangePasswordForm = withAuth(
	function ChangePasswordContent() {
		return (
			<BorderLayout>
				<ChangePasswordForm />
			</BorderLayout>
		)
	},
	{
		requiredPermissions: [Permission.UserUpdate]
	}
)

export default function ChangePasswordPage() {
	return <AuthenticatedChangePasswordForm />
}
