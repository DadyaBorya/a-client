'use client'

import { ResetUserPasswordForm } from '@/components/features/account/reset-password'
import { BorderWrapper } from '@/components/ui/elements'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

function ResetPasswordPage() {
	return (
		<BorderWrapper>
			<ResetUserPasswordForm />
		</BorderWrapper>
	)
}

export default withAuth(ResetPasswordPage, [Permission.UserResetPassword])
