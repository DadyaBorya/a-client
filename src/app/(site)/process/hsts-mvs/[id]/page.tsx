import { Metadata } from 'next'

import HstsMvsProfilePage from '@/components/pages/HstsMvsProfilePage'

export const metadata: Metadata = {
	title: 'Профіль запиту'
}

export default function HstsMvsProfile() {
	return <HstsMvsProfilePage />
}
