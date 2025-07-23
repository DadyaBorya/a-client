import { useProcessListStore } from '@/features/process'
import { BasePagination } from '@/features/shared'

export function ProcessPagination() {
	const { data, setFilters, filters } = useProcessListStore()

	function onPageChange(page: number) {
		const newFilters = {
			...filters,
			page
		}

		setFilters(newFilters)
	}

	const { pages, currentPage, hasNext, hasPrev, total } = data

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
