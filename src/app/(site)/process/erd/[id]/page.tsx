'use client'

import { ErdProcessView } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'

const AuthenticatedErdProfile = withAuth(function ErdProfileContent() {
	return <ErdProcessView />
})

export default function ErdProfilePage() {
	return <AuthenticatedErdProfile />
}
