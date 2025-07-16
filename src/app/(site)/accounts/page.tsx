'use client'

import {
	AccountActions,
	AccountFilter,
	AccountPagination,
	AccountTable
} from '@/components/features/account/account-datatable'
import { BorderWrapper } from '@/components/ui/elements'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

function AccountListPage() {
	return (
		<>
			<div className='mb-3 flex w-full gap-2'>
				<AccountFilter />
				<AccountActions />
			</div>
			<BorderWrapper>
				<AccountTable />
			</BorderWrapper>
			<AccountPagination />
		</>
	)
}

export default withAuth(AccountListPage, [Permission.UserRead])
