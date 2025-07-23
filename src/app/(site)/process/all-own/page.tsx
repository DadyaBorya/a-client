'use client'

import { Permission } from '@/graphql/generated/output'

import { OwnProcessDataTable } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'

const AuthenticatedOwnProcessList = withAuth(
	function OwnProcessListContent() {
		return <OwnProcessDataTable />
	},
	{
		requiredPermissions: [Permission.ProcessReadOwn]
	}
)

export default function OwnProcessListPage() {
	return <AuthenticatedOwnProcessList />
}
