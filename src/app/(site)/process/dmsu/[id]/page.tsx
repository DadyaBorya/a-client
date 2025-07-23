'use client'

import { Permission } from '@/graphql/generated/output'

import { DmsuProcessView } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'
import { BorderLayout } from '@/shared/components/layouts'

const AuthenticatedDmsuProfile = withAuth(function DmsuProfileContent() {
	return <DmsuProcessView />
})

export default function DmsuProfilePage() {
	return <AuthenticatedDmsuProfile />
}
