import { ApolloError } from '@apollo/client'
import { useState } from 'react'
import { toast } from 'sonner'

import { useUpdateUserMutation } from '@/graphql/generated/output'


import { TypeUpdateProfileSchema } from '../types'
import { ROUTES } from '@/shared/constants'

export function useUpdateProfile() {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)

	const [updateUser, { loading: isLoading }] = useUpdateUserMutation({
		onCompleted,
		onError
	})

	function onCompleted() {
		toast.success('Користувач успішно оновлений')
		setRedirectPath(ROUTES.ACCOUNT.PROFILES.path)
	}
	function onError(err: ApolloError) {
		toast.error('Помилка під час оновлення користувача', {
			description: err.message
		})
	}

	function onSubmit(
		data: TypeUpdateProfileSchema,
		dirtyFields: Partial<Record<keyof TypeUpdateProfileSchema, boolean>>
	) {
		const changedFields: Partial<TypeUpdateProfileSchema> = {}

		if (Object.keys(dirtyFields).length === 0) {
			toast.info('Немає змін для збереження')
			return
		}

		const fieldKeys = Object.keys(
			dirtyFields
		) as (keyof TypeUpdateProfileSchema)[]

		fieldKeys.forEach(fieldKey => {
			if (dirtyFields[fieldKey]) {
				changedFields[fieldKey] = data[fieldKey] as any
			}
		})

		const variables = {
			data: { id: data.id, ...changedFields }
		}

		updateUser({ variables })
	}

	return {
		isLoading,
		redirectPath,
		onSubmit
	}
}
