import { Metadata } from 'next'

import { LoginForm } from '@/components/features/auth/login'

export const metadata: Metadata = {
	title: 'Авторизація'
}

export default function LoginPage() {
	return <LoginForm />
}
