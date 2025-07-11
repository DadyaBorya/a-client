import { create } from 'zustand'

import { OrderDirection, UserListModel } from '@/graphql/generated/output'

import { AccountsListStore } from './accounts-list.types'

const filters = {
	orderBy: 'username',
	orderDirection: OrderDirection.Asc,
	limit: 10,
	page: 1,
	searchFor: ''
}

export const useAccountsListStore = create<AccountsListStore>(set => ({
	isLoading: false,
	setIsLoading: (value: boolean) => set(() => ({ isLoading: value })),
	userList: {
		data: [],
		total: 0,
		pages: 0,
		currentPage: 0,
		hasNext: false,
		hasPrev: false
	},
	setUserList: (data: UserListModel) => set(() => ({ userList: data })),
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
