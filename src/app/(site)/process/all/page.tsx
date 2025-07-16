import { Metadata } from 'next'

import ProcessListPage from '@/components/pages/ProcessListPage'

export const metadata: Metadata = {
	title: 'Всі запити на обробку'
}

export default function ProcessAll() {
	return <ProcessListPage />
}
