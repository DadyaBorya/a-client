'use client'

import { DmsuProcessView } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'

const AuthenticatedDmsuProfile = withAuth(function DmsuProfileContent() {
	return <DmsuProcessView />
})

export default function DmsuProfilePage() {
	return <AuthenticatedDmsuProfile />
}
