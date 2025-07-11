'use client'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

import { ResetUserPasswordForm } from '../features/account/reset-password'
import { BorderWrapper } from '../ui/elements'

function ResetPasswordPage() {
	return (
		<BorderWrapper>
			<ResetUserPasswordForm />
		</BorderWrapper>
	)
}

export default withAuth(ResetPasswordPage, [Permission.UserResetPassword])
