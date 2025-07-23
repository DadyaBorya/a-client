import { ApolloError, useApolloClient } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { useLogoutMutation } from '@/graphql/generated/output'

import { ROUTES } from '../constants'
import { useUserStore } from '../stores'

export function useLogout() {
	const router = useRouter()
	const client = useApolloClient()
	const { clear } = useUserStore()

	const [logout, { loading }] = useLogoutMutation({
		onCompleted,
		onError
	})

	function onCompleted() {
		toast.success('Вихід виконано успішно')
		router.push(ROUTES.AUTH.LOGIN.path)
		client.clearStore()
		clear()
	}

	function onError(err: ApolloError) {
		toast.error('Помилка під час виходу', {
			description: err.message || 'Спробуйте ще раз пізніше.'
		})
	}

	return {
		logout,
		isLoading: loading
	}
}
