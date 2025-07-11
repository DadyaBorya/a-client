import { Column } from '@tanstack/react-table'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'

import { Button } from '../common'

export function SortingTableHeader<T>({
	title,
	column
}: {
	title: string
	column: Column<T, unknown>
}) {
	return (
		<Button
			variant='ghost'
			onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			className='h-auto p-0 font-semibold'
		>
			{title}
			{column.getIsSorted() === 'asc' ? (
				<ArrowUp className='ml-2 h-4 w-4' />
			) : column.getIsSorted() === 'desc' ? (
				<ArrowDown className='ml-2 h-4 w-4' />
			) : (
				<ArrowUpDown className='ml-2 h-4 w-4' />
			)}
		</Button>
	)
}
