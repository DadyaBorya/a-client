'use client'

import { ApolloError } from '@apollo/client'
import { toast } from 'sonner'

import { useRemoveSessionMutation } from '@/graphql/generated/output'

export function useRemoveSession() {
	const [removeSession, { loading: isLoading }] = useRemoveSessionMutation({
		onCompleted,
		onError
	})

	function onCompleted() {
		toast.success('Сесія успішно видаленна')
	}
	function onError(err: ApolloError) {
		toast.error('Помилка під час видалення сесії', {
			description: err.message
		})
	}

	function onSubmit(id: string) {
		removeSession({ variables: { id } })
	}

	return {
		onSubmit,
		isLoading
	}
}
