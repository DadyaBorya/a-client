import { ApolloError } from '@apollo/client'
import { useState } from 'react'
import { toast } from 'sonner'

import { useChangeUserPasswordMutation } from '@/graphql/generated/output'

import { TypeChangePasswordSchema } from '../types'

import { ROUTES } from '@/shared/constants'

export function useChangePassword() {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)

	const [changePassword, { loading: isLoading }] =
		useChangeUserPasswordMutation({
			onCompleted,
			onError
		})

	function onCompleted() {
		toast.success('Пароль успішно змінено')

		setRedirectPath(ROUTES.ACCOUNT.OWN_PROFILE.path)
	}

	function onError(err: ApolloError) {
		toast.error('Помилка під час зміни паролю', {
			description: err.message
		})
	}

	function onSubmit(data: TypeChangePasswordSchema) {
		changePassword({
			variables: {
				data: {
					currentPassword: data.currentPassword,
					password: data.newPassword
				}
			}
		})
	}

	return {
		redirectPath,
		isLoading,
		onSubmit
	}
}
