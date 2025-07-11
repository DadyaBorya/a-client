'use client'

import withAuth from '@/hooks/auth/withAuth'

function HomePage() {
	return <div>HomePage</div>
}

export default withAuth(HomePage, [])
