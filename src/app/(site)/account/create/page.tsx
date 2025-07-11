import { Metadata } from 'next'

import CreateUserPage from '@/components/pages/CreateUserPage'

export const metadata: Metadata = {
	title: 'Створення нового користувача'
}

export default function CreateUser() {
	return <CreateUserPage />
}
