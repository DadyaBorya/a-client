import { userStore } from '@/libs/stores/user'

export function useUserStore() {
	const user = userStore(state => state.user)
	const setUser = userStore(state => state.setUser)
	const setIsLoading = userStore(state => state.setIsLoading)
	const isLoading = userStore(state => state.isLoading)
	const clear = userStore(state => state.clear)

	return {
		setUser,
		setIsLoading,
		user,
		isLoading,
		clear
	}
}
