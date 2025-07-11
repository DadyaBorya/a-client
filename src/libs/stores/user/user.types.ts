import { Permission } from '@/graphql/generated/output'

export interface UserStoreModel {
	id: string
	isTotpEnabled: boolean
	permissions: Permission[]
	username: string
	displayName: string
	isSuperUser: boolean
	isBlocked: boolean
}

export interface UserStore {
	user: UserStoreModel | null
	setUser: (value: UserStoreModel | null) => void
	isLoading: boolean
	setIsLoading: (value: boolean) => void
	clear: () => void
}
