import { UserListModel } from '@/graphql/generated/output'

import { Pagination } from '@/libs/types/core'

export interface AccountsListStore {
	filters: Pagination
	setFilters: (filters: Partial<Pagination>) => void
	resetFilters: () => void
	userList: UserListModel
	setUserList: (userList: UserListModel) => void
	isLoading: boolean
	setIsLoading: (value: boolean) => void
}
