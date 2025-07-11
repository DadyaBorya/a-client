import { Metadata } from 'next'

import TotpEnablePage from '@/components/pages/TotpEnablePage'

export const metadata: Metadata = {
	title: 'Увімкнення двофакторної автентифікації'
}

export default function TotpEnable() {
	return <TotpEnablePage />
}
