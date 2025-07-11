'use client'

import withAuth from '@/hooks/auth/withAuth'

import { TotpEnableForm } from '../features/auth/totp-enable'

function TotpEnablePage() {
	return <TotpEnableForm />
}

export default withAuth(TotpEnablePage, [])
