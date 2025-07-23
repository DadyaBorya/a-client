'use client'

import { Permission } from '@/graphql/generated/output'

import { ResetPasswordForm } from '@/features/account'
import { withAuth } from '@/features/shared/hocs'
import { BorderLayout } from '@/shared/components/layouts'

const AuthenticatedResetPasswordForm = withAuth(
	function ResetPasswordContent() {
		return (
			<BorderLayout>
				<ResetPasswordForm />
			</BorderLayout>
		)
	},
	{
		requiredPermissions: [Permission.UserResetPassword]
	}
)

export default function ResetPasswordPage() {
	return <AuthenticatedResetPasswordForm />
}
