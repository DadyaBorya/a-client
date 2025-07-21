'use client'

import { DmsuProfile } from '@/components/features/process/dmsu/profile'

import withAuth from '@/hooks/auth/withAuth'

function HstsMvsProfilePage() {
	return <DmsuProfile />
}

export default withAuth(HstsMvsProfilePage, [])
