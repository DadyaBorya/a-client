import { useAccountListStore } from '@/features/account'
import { BasePagination } from '@/features/shared'

export function AccountPagination() {
	const { data, setFilters, filters } = useAccountListStore()

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
