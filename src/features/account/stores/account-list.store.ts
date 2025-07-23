import { create } from 'zustand'

import { OrderDirection, UserListModel } from '@/graphql/generated/output'

import { Pagination } from '@/shared/types'

interface AccountListStore {
	filters: Pagination
	setFilters: (filters: Partial<Pagination>) => void
	resetFilters: () => void
	data: UserListModel
	setData: (data: UserListModel) => void
	isLoading: boolean
	setIsLoading: (value: boolean) => void
}

const filters = {
	orderBy: 'username',
	orderDirection: OrderDirection.Asc,
	limit: 10,
	page: 1,
	searchFor: ''
}

const accountListStore = create<AccountListStore>(set => ({
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
	setData: (data: UserListModel) => set(() => ({ data })),
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

export function useAccountListStore() {
	const isLoading = accountListStore(state => state.isLoading)
	const setIsLoading = accountListStore(state => state.setIsLoading)

	const data = accountListStore(state => state.data)
	const setData = accountListStore(state => state.setData)

	const filters = accountListStore(state => state.filters)
	const setFilters = accountListStore(state => state.setFilters)
	const resetFilters = accountListStore(state => state.resetFilters)

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
