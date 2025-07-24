'use client'

import { PfuProcessView } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'

const AuthenticatedPfuProfile = withAuth(function PfuProfileContent() {
	return <PfuProcessView />
})

export default function PfuProfilePage() {
	return <AuthenticatedPfuProfile />
}
