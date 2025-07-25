import { ApolloError } from '@apollo/client'
import { useState } from 'react'
import { toast } from 'sonner'

import {
	CreateErdProcessMutation,
	Permission,
	useCreateErdProcessMutation
} from '@/graphql/generated/output'

import { TypeCreateErdProcessSchema } from '../types'

import { ROUTES } from '@/shared/constants'
import { useUserStore } from '@/shared/stores'

export function useCreateErd() {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)
	const { user } = useUserStore()

	const [create, { loading: isLoading }] = useCreateErdProcessMutation({
		onCompleted,
		onError
	})

	function onCompleted(data: CreateErdProcessMutation) {
		toast.success('Запит на обробку даних успішно створений')

		if (
			user?.permissions.includes(Permission.ProcessReadOwn) ||
			user?.isSuperUser === true
		) {
			// setRedirectPath(
			// 	ROUTES.PROCESS.ERD.VIEW.build(data.createErdProcess)
			// )
		}
	}

	function onError(err: ApolloError) {
		toast.error('Помилка', { description: err.message })
	}

	function onSubmit(data: TypeCreateErdProcessSchema) {
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
