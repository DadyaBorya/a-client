import { Metadata } from 'next'

import UpdateProfilePage from '@/components/pages/UpdateProfilePage'

export const metadata: Metadata = {
	title: 'Оновлення користувача'
}

export default function UpdateUser() {
	return <UpdateProfilePage />
}
