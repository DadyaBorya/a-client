import { BasePagination } from '@/components/features/table'

import { useAccountsListStore } from '@/libs/stores/accounts-list'

export function AccountPagination() {
	const { userList, setFilters, filters } = useAccountsListStore()

	function onPageChange(page: number) {
		const newFilters = {
			...filters,
			page
		}

		setFilters(newFilters)
	}

	const { pages, currentPage, hasNext, hasPrev, total } = userList

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
