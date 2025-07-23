'use client'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

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

interface UserStore {
	user: UserStoreModel | null
	setUser: (value: UserStoreModel | null) => void
	clear: () => void
}

const userStore = create(
	persist<UserStore>(
		set => ({
			user: null,
			setUser: (value: UserStoreModel | null) => set({ user: value }),

			clear: () => set({ user: null })
		}),
		{
			name: 'user-store',
			storage: createJSONStorage(() => localStorage)
		}
	)
)

export function useUserStore() {
	const user = userStore(state => state.user)
	const setUser = userStore(state => state.setUser)
	const clear = userStore(state => state.clear)

	return {
		user,
		setUser,
		clear
	}
}
