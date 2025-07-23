'use client'

import { Permission } from '@/graphql/generated/output'

import { AccountDataTable } from '@/features/account'
import { withAuth } from '@/features/shared/hocs'

const AuthenticatedAccountList = withAuth(
	function AccountListContent() {
		return <AccountDataTable />
	},
	{
		requiredPermissions: [Permission.UserRead]
	}
)

export default function AccountListPage() {
	return <AuthenticatedAccountList />
}
