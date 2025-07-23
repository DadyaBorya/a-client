'use client'

import { withAuth } from '@/features/shared/hocs'

const AuthenticatedHome = withAuth(function HomeContent() {
	return <div></div>
})

export default function HomePage() {
	return <AuthenticatedHome />
}
