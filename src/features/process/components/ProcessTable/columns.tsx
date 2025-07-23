import { ColumnDef } from '@tanstack/react-table'

import { ProcessModel, Status } from '@/graphql/generated/output'

import { ProcessIdCol } from './ProcessIdCol'
import { ProcessTypeCol } from './ProcessTypeCol'
import { SortingTableHeader, StatusBadge } from '@/shared/components/common'
import { formatDate } from '@/shared/utils'

const createIdColumn = (): ColumnDef<ProcessModel> => ({
	accessorKey: 'id',
	cell: ({ row }) => {
		const { id, type } = row.original
		return <ProcessIdCol id={id} type={type} />
	},
	header: ({ column }) => (
		<SortingTableHeader title='Ідентифікатор' column={column} />
	)
})

const createTypeColumn = (): ColumnDef<ProcessModel> => ({
	accessorKey: 'type',
	cell: ({ row }) => <ProcessTypeCol type={row.original.type} />,
	header: ({ column }) => <SortingTableHeader title='Тип' column={column} />
})

const createStatusColumn = (): ColumnDef<ProcessModel> => ({
	accessorKey: 'status',
	header: ({ column }) => (
		<SortingTableHeader title='Статус' column={column} />
	),
	cell: ({ row }) => <StatusBadge status={row.getValue('status') as Status} />
})

const createOwnerColumn = (): ColumnDef<ProcessModel> => ({
	accessorKey: 'owner',
	cell: ({ getValue }) => getValue<string>() || 'Не визначено',
	header: ({ column }) => (
		<SortingTableHeader title="Суб'єкт" column={column} />
	)
})

const createCreatedAtColumn = (): ColumnDef<ProcessModel> => ({
	accessorKey: 'createdAt',
	cell: ({ getValue }) => formatDate(getValue<Date>()),
	header: ({ column }) => (
		<SortingTableHeader title='Дата створення' column={column} />
	)
})

const createUserColumn = (): ColumnDef<ProcessModel> => ({
	accessorKey: 'user.displayName',
	header: ({ column }) => (
		<SortingTableHeader title='Ініціатор' column={column} />
	)
})

export const ownColumns: ColumnDef<ProcessModel>[] = [
	createIdColumn(),
	createTypeColumn(),
	createStatusColumn(),
	createOwnerColumn(),
	createCreatedAtColumn()
]

export const allColumns: ColumnDef<ProcessModel>[] = [
	createIdColumn(),
	createUserColumn(),
	createTypeColumn(),
	createStatusColumn(),
	createOwnerColumn(),
	createCreatedAtColumn()
]
