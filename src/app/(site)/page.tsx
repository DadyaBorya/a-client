import { Metadata } from 'next'

import HomePage from '@/components/pages/HomePage'

export const metadata: Metadata = {
	title: 'Головна'
}

export default function Home() {
	return <HomePage />
}
