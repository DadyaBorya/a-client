import { Metadata } from 'next'

import AccountProfilePage from '@/components/pages/AccountProfilePage'

export const metadata: Metadata = {
	title: 'Профіль користувача'
}

export default async function AccountProfile() {
	return <AccountProfilePage />
}
