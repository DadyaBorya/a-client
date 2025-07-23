import { Table, flexRender } from '@tanstack/react-table'

import { TableHead, TableHeader, TableRow } from '@/shared/components/ui'

export function BaseTableHeader<T>({ table }: { table: Table<T> }) {
	return (
		<TableHeader>
			{table.getHeaderGroups().map(headerGroup => (
				<TableRow key={headerGroup.id}>
					{headerGroup.headers.map(header => {
						return (
							<TableHead key={header.id}>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
							</TableHead>
						)
					})}
				</TableRow>
			))}
		</TableHeader>
	)
}
