import { SortingState } from '@tanstack/react-table'
import { useEffect, useState } from 'react'

import { OrderDirection } from '@/graphql/generated/output'

import { useAccountListStore } from '../stores'

export function useAccountListSorting() {
	const { setFilters, filters } = useAccountListStore()

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

	return { sorting, setSorting }
}
