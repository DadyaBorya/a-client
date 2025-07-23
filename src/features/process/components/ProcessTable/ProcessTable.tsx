import {
	ColumnDef,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'

import { ProcessModel } from '@/graphql/generated/output'

import { useProcessListSorting, useProcessListStore } from '@/features/process'
import { BaseTableBody, BaseTableHeader } from '@/features/shared'
import { Table } from '@/shared/components/ui'

export function ProcessTable({
	columns
}: {
	columns: ColumnDef<ProcessModel>[]
}) {
	const { isLoading, data } = useProcessListStore()
	const { sorting, setSorting } = useProcessListSorting()

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
