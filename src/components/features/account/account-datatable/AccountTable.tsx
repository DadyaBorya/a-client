'use client'

import {
	SortingState,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'

import { BaseTableBody, BaseTableHeader } from '@/components/features/table'
import { Table } from '@/components/ui/common'

import { OrderDirection } from '@/graphql/generated/output'

import { useAccountsListStore } from '@/libs/stores/accounts-list'

import { columns } from './columns'

export function AccountTable() {
	const { userList, filters, setFilters, isLoading } = useAccountsListStore()
	const [sorting, setSorting] = useState<SortingState>([])

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
		data: userList.data,
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
