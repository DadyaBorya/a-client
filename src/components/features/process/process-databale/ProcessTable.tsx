'use client'

import {
	ColumnDef,
	SortingState,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'

import { BaseTableBody, BaseTableHeader } from '@/components/features/table'
import { Table } from '@/components/ui/common'

import {
	OrderDirection,
	ProcessListModel,
	ProcessModel
} from '@/graphql/generated/output'

import { useProcessesListStore } from '@/libs/stores/process'

export function ProcessTable({
	columns,
	isLoading,
	data
}: {
	columns: ColumnDef<ProcessModel>[]
	isLoading: boolean
	data?: ProcessListModel
}) {
	const { list, filters, setFilters, setList, setIsLoading } =
		useProcessesListStore()
	const [sorting, setSorting] = useState<SortingState>([])

	useEffect(() => {
		setIsLoading(isLoading)
	}, [isLoading, setIsLoading])

	useEffect(() => {
		if (data) {
			setList(data)
		}
	}, [data, setList])

	useEffect(() => {
		if (sorting.length > 0) {
			const sortItem = sorting[0]

			setFilters({
				orderBy: sortItem.id,
				orderDirection: sortItem.desc
					? OrderDirection.Desc
					: OrderDirection.Asc
			})
		}
	}, [sorting, setFilters])

	useEffect(() => {
		setSorting([
			{
				id: filters.orderBy,
				desc: filters.orderDirection === OrderDirection.Desc
			}
		])
	}, [filters.orderBy, filters.orderDirection])

	const table = useReactTable({
		data: list.data,
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
