import { Metadata } from 'next'

import ProcessPage from '@/components/pages/ProcessPage'

export const metadata: Metadata = {
	title: 'Обробка'
}

export default function Process() {
	return <ProcessPage />
}
