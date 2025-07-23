import {
	getCoreRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'

import { columns } from './columns'
import { useAccountListSorting, useAccountListStore } from '@/features/account'
import { BaseTableBody, BaseTableHeader } from '@/features/shared'
import { Table } from '@/shared/components/ui'

export function AccountTable() {
	const { isLoading, data } = useAccountListStore()
	const { sorting, setSorting } = useAccountListSorting()

	const table = useReactTable({
		data: data.data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: setSorting,
		state: {
			sorting
		},
		manualSorting: true
	})

	return (
		<Table>
			<BaseTableHeader table={table} />
			<BaseTableBody
				isLoading={isLoading}
				table={table}
				columns={columns}
			/>
		</Table>
	)
}
