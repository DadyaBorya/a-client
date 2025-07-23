import { SortingState } from '@tanstack/react-table'
import { useEffect, useState } from 'react'

import { OrderDirection } from '@/graphql/generated/output'

import { useProcessListStore } from '../stores'

export function useProcessListSorting() {
	const { setFilters, filters } = useProcessListStore()

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
