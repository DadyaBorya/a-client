'use client'

import { ApolloError } from '@apollo/client'
import { GraphQLFormattedErrorExtensions } from 'graphql'
import { useState } from 'react'
import { toast } from 'sonner'

import { useLoginMutation } from '@/graphql/generated/output'

import { TypeLoginSchema } from '../types'

import {
	PIN_REQUIRED_CODE,
	ROUTES,
	TOTP_NOT_ENABLED_CODE
} from '@/shared/constants'

export function useLogin() {
	const [isPinRequired, setIsPinRequired] = useState(false)
	const [redirectPath, setRedirectPath] = useState<string | null>(null)
	const [login, { loading: isLoading }] = useLoginMutation({
		onCompleted,
		onError
	})

	function onSubmit(data: TypeLoginSchema) {
		login({
			variables: {
				data: {
					...data,
					...(isPinRequired ? { pin: data.pin } : { pin: null })
				}
			}
		})
	}

	function onCompleted() {
		toast.success('Вхід успішний')
		setRedirectPath(ROUTES.HOME.path)
	}

	function onError(err: ApolloError) {
		const extensions = err.cause
			?.extensions as GraphQLFormattedErrorExtensions
		const code = extensions?.code

		toast.error('Помилка під час входу', { description: err.message })

		if (code === PIN_REQUIRED_CODE) {
			setIsPinRequired(true)
			return
		}

		if (code === TOTP_NOT_ENABLED_CODE) {
			setRedirectPath(ROUTES.AUTH.TOTP_ENABLE.path)
		}
	}

	function cancelTotp() {
		setIsPinRequired(false)
	}

	return {
		isPinRequired,
		onSubmit,
		cancelTotp,
		isLoading,
		redirectPath
	}
}
