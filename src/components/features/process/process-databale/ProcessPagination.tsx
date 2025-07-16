import { BasePagination } from '@/components/features/table'

import { useProcessesListStore } from '@/libs/stores/process'

export function ProcessPagination() {
	const { list, setFilters, filters } = useProcessesListStore()

	function onPageChange(page: number) {
		const newFilters = {
			...filters,
			page
		}

		setFilters(newFilters)
	}

	const { pages, currentPage, hasNext, hasPrev, total } = list

	return (
		<BasePagination
			total={total}
			pages={pages}
			currentPage={currentPage}
			hasNext={hasNext}
			hasPrev={hasPrev}
			onPageChange={onPageChange}
		/>
	)
}
