import { Metadata } from 'next'

import ResetPasswordPage from '@/components/pages/ResetPasswordPage'

export const metadata: Metadata = {
	title: 'Відновлення паролю'
}

export default function ResetPassword() {
	return <ResetPasswordPage />
}
