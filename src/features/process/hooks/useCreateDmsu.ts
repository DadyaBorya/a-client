import { ApolloError } from '@apollo/client'
import { useState } from 'react'
import { toast } from 'sonner'

import {
	CreateDmsuProcessMutation,
	Permission,
	useCreateDmsuProcessMutation
} from '@/graphql/generated/output'

import { TypeCreateDmsuProcessSchema } from '../types'

import { ROUTES } from '@/shared/constants'
import { useUserStore } from '@/shared/stores'

export function useCreateDmsu() {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)
	const { user } = useUserStore()

	const [create, { loading: isLoading }] = useCreateDmsuProcessMutation({
		onCompleted,
		onError
	})

	function onCompleted(data: CreateDmsuProcessMutation) {
		toast.success('Запит на обробку даних успішно створений')

		if (
			user?.permissions.includes(Permission.ProcessReadOwn) ||
			user?.isSuperUser === true
		) {
			setRedirectPath(
				ROUTES.PROCESS.DMSU.VIEW.build(data.createDmsuProcess)
			)
		}
	}

	function onError(err: ApolloError) {
		toast.error('Помилка', { description: err.message })
	}

	function onSubmit(data: TypeCreateDmsuProcessSchema) {
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
