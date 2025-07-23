import { ColumnDef, Table, flexRender } from '@tanstack/react-table'

import { Spinner, TableBody, TableCell, TableRow } from '@/shared/components/ui'

export function BaseTableBody<T>({
	table,
	columns,
	isLoading
}: {
	table: Table<T>
	columns: ColumnDef<T>[]
	isLoading?: boolean
}) {
	const rows = table.getRowModel().rows

	return (
		<TableBody>
			{isLoading ? (
				<TableRow>
					<TableCell
						colSpan={columns.length}
						className='h-40 text-center'
					>
						<Spinner />
					</TableCell>
				</TableRow>
			) : rows.length ? (
				rows.map(row => (
					<TableRow
						key={row.id}
						data-state={row.getIsSelected() && 'selected'}
					>
						{row.getVisibleCells().map(cell => (
							<TableCell key={cell.id}>
								{flexRender(
									cell.column.columnDef.cell,
									cell.getContext()
								)}
							</TableCell>
						))}
					</TableRow>
				))
			) : (
				<TableRow>
					<TableCell
						colSpan={columns.length}
						className='h-24 text-center'
					>
						Записи відсутні.
					</TableCell>
				</TableRow>
			)}
		</TableBody>
	)
}
