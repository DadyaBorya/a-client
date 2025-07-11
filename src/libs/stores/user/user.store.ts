import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { UserStore, UserStoreModel } from './user.types'

export const userStore = create(
	persist<UserStore>(
		set => ({
			user: null,
			setUser: (value: UserStoreModel | null) => set({ user: value }),
			isLoading: false,
			setIsLoading: (value: boolean) => set({ isLoading: value }),
			clear: () => {
				localStorage.removeItem('user')
				set({ user: null })
			}
		}),
		{
			name: 'user',
			storage: createJSONStorage(() => localStorage)
		}
	)
)
