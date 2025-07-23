import { ColumnDef } from '@tanstack/react-table'
import { CheckCircle2, XCircle } from 'lucide-react'
import Link from 'next/link'

import { UserModel } from '@/graphql/generated/output'

import { SortingTableHeader } from '@/shared/components/common'
import { ROUTES } from '@/shared/constants'
import { formatDate } from '@/shared/utils'

export const columns: ColumnDef<UserModel>[] = [
	{
		accessorKey: 'username',
		header: ({ column }) => (
			<SortingTableHeader title="Ім'я користувача" column={column} />
		),
		cell: ({ row }) => {
			const { id, username } = row.original
			return (
				<Link
					href={ROUTES.ACCOUNT.PROFILE.build(id)}
					className='underline'
				>
					{username}
				</Link>
			)
		}
	},
	{
		accessorKey: 'displayName',
		header: ({ column }) => (
			<SortingTableHeader title="Ім'я для відображення" column={column} />
		)
	},
	{
		accessorKey: 'isBlocked',
		header: ({ column }) => (
			<SortingTableHeader title='Статус' column={column} />
		),
		cell: ({ getValue }) => {
			const isBlocked = getValue<boolean>()
			return isBlocked ? (
				<div className='flex items-center gap-1 text-red-600'>
					<XCircle className='h-5 w-5' />
					<span>Заблокований</span>
				</div>
			) : (
				<div className='flex items-center gap-1 text-green-600'>
					<CheckCircle2 className='h-5 w-5' />
					<span>Активний</span>
				</div>
			)
		}
	},
	{
		accessorKey: 'createdAt',
		cell: ({ getValue }) => formatDate(getValue<Date>()),
		header: ({ column }) => (
			<SortingTableHeader title='Дата створення' column={column} />
		)
	}
]
