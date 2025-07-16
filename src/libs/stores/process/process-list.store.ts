import { create } from 'zustand'

import { OrderDirection, ProcessListModel } from '@/graphql/generated/output'

import { ProcessesListStore } from './process-list.types'

const filters = {
	orderBy: 'createdAt',
	orderDirection: OrderDirection.Desc,
	limit: 10,
	page: 1,
	searchFor: ''
}

export const useProcessesListStore = create<ProcessesListStore>(set => ({
	isLoading: false,
	setIsLoading: (value: boolean) => set(() => ({ isLoading: value })),
	list: {
		data: [],
		total: 0,
		pages: 0,
		currentPage: 0,
		hasNext: false,
		hasPrev: false
	},
	setList: (data: ProcessListModel) => set(() => ({ list: data })),
	filters,
	setFilters: newFilters =>
		set(state => ({
			filters: { ...state.filters, ...newFilters }
		})),
	resetFilters: () =>
		set(() => ({
			filters
		}))
}))
