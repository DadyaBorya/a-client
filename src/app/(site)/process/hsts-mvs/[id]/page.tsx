'use client'

import { HstsMvsProfile } from '@/components/features/process/hsts-mvs/profile'

import withAuth from '@/hooks/auth/withAuth'

function HstsMvsProfilePage() {
	return <HstsMvsProfile />
}

export default withAuth(HstsMvsProfilePage, [])
