'use client'

import withAuth from '@/hooks/auth/withAuth'

import { HstsMvsProfile } from '../features/process/hsts-mvs/profile'

function HstsMvsProfilePage() {
	return <HstsMvsProfile />
}

export default withAuth(HstsMvsProfilePage, [])
