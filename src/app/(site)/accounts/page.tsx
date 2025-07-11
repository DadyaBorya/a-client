import { Metadata } from 'next'

import AccountListPage from '@/components/pages/AccountListPage'

export const metadata: Metadata = {
	title: 'Користувачі'
}

export default function AccountList() {
	return <AccountListPage />
}
