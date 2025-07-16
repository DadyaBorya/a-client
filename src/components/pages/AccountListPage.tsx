'use client'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

import {
	AccountActions,
	AccountFilter,
	AccountPagination,
	AccountTable
} from '../features/account/account-datatable'
import { BorderWrapper } from '../ui/elements'

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
