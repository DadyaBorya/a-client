import { ProcessListModel } from '@/graphql/generated/output'

import { Pagination } from '@/libs/types/core'

export interface ProcessesListStore {
	filters: Pagination
	setFilters: (filters: Partial<Pagination>) => void
	resetFilters: () => void
	list: ProcessListModel
	setList: (list: ProcessListModel) => void
	isLoading: boolean
	setIsLoading: (value: boolean) => void
}
