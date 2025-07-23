import { create } from 'zustand'

import { OrderDirection, ProcessListModel } from '@/graphql/generated/output'

import { Pagination } from '@/shared/types'

interface ProcessesListStore {
	filters: Pagination
	setFilters: (filters: Partial<Pagination>) => void
	resetFilters: () => void
	data: ProcessListModel
	setData: (data: ProcessListModel) => void
	isLoading: boolean
	setIsLoading: (value: boolean) => void
}

const filters = {
	orderBy: 'createdAt',
	orderDirection: OrderDirection.Desc,
	limit: 10,
	page: 1,
	searchFor: ''
}

const processesListStore = create<ProcessesListStore>(set => ({
	isLoading: false,
	setIsLoading: (value: boolean) => set(() => ({ isLoading: value })),
	data: {
		data: [],
		total: 0,
		pages: 0,
		currentPage: 0,
		hasNext: false,
		hasPrev: false
	},
	setData: (data: ProcessListModel) => set(() => ({ data })),
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

export function useProcessListStore() {
	const isLoading = processesListStore(state => state.isLoading)
	const setIsLoading = processesListStore(state => state.setIsLoading)

	const data = processesListStore(state => state.data)
	const setData = processesListStore(state => state.setData)

	const filters = processesListStore(state => state.filters)
	const setFilters = processesListStore(state => state.setFilters)
	const resetFilters = processesListStore(state => state.resetFilters)

	return {
		isLoading,
		setIsLoading,
		data,
		setData,
		filters,
		setFilters,
		resetFilters
	}
}
