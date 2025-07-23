'use client'

import { Permission } from '@/graphql/generated/output'

import { ProcessDataTable } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'

const AuthenticatedProcessList = withAuth(
	function ProcessListContent() {
		return <ProcessDataTable />
	},
	{
		requiredPermissions: [Permission.ProcessReadAll]
	}
)

export default function ProcessListPage() {
	return <AuthenticatedProcessList />
}
