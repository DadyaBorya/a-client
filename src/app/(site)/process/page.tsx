'use client'

import { Permission } from '@/graphql/generated/output'

import { AvailableProcesses } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'

const AuthenticatedProcessPage = withAuth(
	function ProcessContent() {
		return <AvailableProcesses />
	},
	{
		requiredPermissions: [
			Permission.ProcessReadAll,
			Permission.ProcessReadOwn,
			Permission.HstsMvsCreate,
			Permission.DmsuCreate,
			Permission.PfuCreate
		],
		includeAll: false
	}
)

export default function ProcessPage() {
	return <AuthenticatedProcessPage />
}
