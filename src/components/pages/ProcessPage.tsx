'use client'

import withAuth from '@/hooks/auth/withAuth'

import { PROCESS_PERMISSIONS } from '@/libs/constants'

function ProcessPage() {
	return <div>ProcessPage</div>
}

export default withAuth(ProcessPage, PROCESS_PERMISSIONS, false)
