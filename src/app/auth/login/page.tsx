import { Metadata } from 'next'

import { LoginForm } from '@/features/auth'

export const metadata: Metadata = {
	title: 'Авторизація'
}

export default function LoginPage() {
	return <LoginForm />
}
