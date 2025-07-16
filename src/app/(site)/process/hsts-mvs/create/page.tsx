import { Metadata } from 'next'

import CreateHstsMvsFormPage from '@/components/pages/CreateHstsMvsFormPage'

export const metadata: Metadata = {
	title: 'Створення запиту на обробку'
}

export default function HstsMvsCreate() {
	return <CreateHstsMvsFormPage />
}
