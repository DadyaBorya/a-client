'use client'

import withAuth from '@/hooks/auth/withAuth'

function Home() {
	return <div>HomePage</div>
}

export default withAuth(Home, [])
