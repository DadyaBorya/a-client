'use client'

import { ChangeUserPasswordForm } from '@/components/features/account/change-password'
import { BorderWrapper } from '@/components/ui/elements'

import withAuth from '@/hooks/auth/withAuth'

function ChangePasswordPage() {
	return (
		<BorderWrapper>
			<ChangeUserPasswordForm />
		</BorderWrapper>
	)
}

export default withAuth(ChangePasswordPage, [])
