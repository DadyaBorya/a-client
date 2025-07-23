import { ApolloError } from '@apollo/client'
import { useState } from 'react'
import { toast } from 'sonner'

import { useResetUserPasswordMutation } from '@/graphql/generated/output'

import { TypeResetPasswordSchema } from '../types'

import { ROUTES } from '@/shared/constants'

export function useResetPassword() {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)
	const [id, setId] = useState<string | null>(null)

	const [changePassword, { loading: isLoading }] =
		useResetUserPasswordMutation({
			onCompleted,
			onError
		})

	function onCompleted() {
		toast.success('Пароль успішно змінено')
		setRedirectPath(ROUTES.ACCOUNT.PROFILE.build(id as string))
	}

	function onError(err: ApolloError) {
		toast.error('Помилка під час зміни паролю', {
			description: err.message
		})
	}

	function onSubmit(data: TypeResetPasswordSchema) {
		setId(data.id)

		const variables = {
			data: {
				id: data.id,
				password: data.newPassword
			}
		}

		changePassword({ variables })
	}

	return { onSubmit, isLoading, redirectPath }
}
