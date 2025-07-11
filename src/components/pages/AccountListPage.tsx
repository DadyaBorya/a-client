'use client'

import { MoreVertical, UserPlus } from 'lucide-react'
import Link from 'next/link'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

import { ROUTES } from '@/libs/constants'

import {
	AccountActions,
	AccountFilter,
	AccountPagination,
	AccountTable
} from '../features/account/account-datatable'
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '../ui/common'
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
