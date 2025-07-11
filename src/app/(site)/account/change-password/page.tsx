import { Metadata } from 'next'

import ChangePasswordPage from '@/components/pages/ChangePasswordPage'

export const metadata: Metadata = {
	title: 'Зміна паролю'
}

export default function ChangePassword() {
	return <ChangePasswordPage />
}
