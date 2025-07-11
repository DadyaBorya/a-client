'use client'

import withAuth from '@/hooks/auth/withAuth'

import { ChangeUserPasswordForm } from '../features/account/change-password'
import { BorderWrapper } from '../ui/elements'

function ChangePasswordPage() {
	return (
		<BorderWrapper>
			<ChangeUserPasswordForm />
		</BorderWrapper>
	)
}

export default withAuth(ChangePasswordPage, [])
