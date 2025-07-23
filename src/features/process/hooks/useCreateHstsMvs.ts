import { ApolloError } from '@apollo/client'
import { useState } from 'react'
import { toast } from 'sonner'

import {
	CreateHstsMvsProcessMutation,
	Permission,
	useCreateHstsMvsProcessMutation
} from '@/graphql/generated/output'

import { TypeCreateHstsMvsProcessSchema } from '../types'

import { ROUTES } from '@/shared/constants'
import { useUserStore } from '@/shared/stores'

export function useCreateHstsMvs() {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)
	const { user } = useUserStore()

	const [create, { loading: isLoading }] = useCreateHstsMvsProcessMutation({
		onCompleted,
		onError
	})

	function onCompleted(data: CreateHstsMvsProcessMutation) {
		toast.success('Запит на обробку даних успішно створений')

		if (
			user?.permissions.includes(Permission.ProcessReadOwn) ||
			user?.isSuperUser === true
		) {
			setRedirectPath(
				ROUTES.PROCESS.DMSU.VIEW.build(data.createHstsMvsProcess)
			)
		}
	}

	function onError(err: ApolloError) {
		toast.error('Помилка', { description: err.message })
	}

	function onSubmit(data: TypeCreateHstsMvsProcessSchema) {
		create({
			variables: {
				...data
			}
		})
	}

	return {
		redirectPath,
		isLoading,
		onSubmit
	}
}
