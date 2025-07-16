import { Metadata } from 'next'

import OwnProcessListPage from '@/components/pages/OwnProcessListPage'

export const metadata: Metadata = {
	title: 'Мої запити на обробку'
}

export default function AllOwnProcesses() {
	return <OwnProcessListPage />
}
