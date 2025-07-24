import { ApolloError } from '@apollo/client'
import { useState } from 'react'
import { toast } from 'sonner'

import {
	CreatePfuProcessMutation,
	Permission,
	useCreatePfuProcessMutation
} from '@/graphql/generated/output'

import { TypeCreatePfuProcessSchema } from '../types'

import { ROUTES } from '@/shared/constants'
import { useUserStore } from '@/shared/stores'

export function useCreatePfu() {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)
	const { user } = useUserStore()

	const [create, { loading: isLoading }] = useCreatePfuProcessMutation({
		onCompleted,
		onError
	})

	function onCompleted(data: CreatePfuProcessMutation) {
		toast.success('Запит на обробку даних успішно створений')

		if (
			user?.permissions.includes(Permission.ProcessReadOwn) ||
			user?.isSuperUser === true
		) {
			setRedirectPath(
				ROUTES.PROCESS.PFU.VIEW.build(data.createPfuProcess)
			)
		}
	}

	function onError(err: ApolloError) {
		toast.error('Помилка', { description: err.message })
	}

	function onSubmit(data: TypeCreatePfuProcessSchema) {
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
