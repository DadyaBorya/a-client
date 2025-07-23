'use client'

import { HstsMvsProcessView } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'

const AuthenticatedHstsMvsProfile = withAuth(function HstsMvsProfileContent() {
	return <HstsMvsProcessView />
})

export default function HstsMvsProfilePage() {
	return <AuthenticatedHstsMvsProfile />
}
