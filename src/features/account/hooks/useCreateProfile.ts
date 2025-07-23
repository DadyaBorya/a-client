import { ApolloError } from '@apollo/client'
import { useState } from 'react'
import { toast } from 'sonner'

import { useCreateUserMutation } from '@/graphql/generated/output'


import { TypeCreateProfileSchema } from '../types'
import { ROUTES } from '@/shared/constants'

export function useCreateProfile() {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)

	const [createUser, { loading: isLoading }] = useCreateUserMutation({
		onCompleted,
		onError
	})

	function onCompleted() {
		toast.success('Користувач успішно створений')
		setRedirectPath(ROUTES.ACCOUNT.PROFILES.path)
	}
	function onError(err: ApolloError) {
		toast.error('Помилка під час створення користувача', {
			description: err.message
		})
	}

	function onSubmit(data: TypeCreateProfileSchema) {
		const variables = {
			data
		}

		createUser({ variables })
	}

	return {
		isLoading,
		redirectPath,
		onSubmit
	}
}
