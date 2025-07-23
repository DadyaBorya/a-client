'use client'

import { ApolloError } from '@apollo/client'
import { useState } from 'react'
import { toast } from 'sonner'

import {
	useEnableTotpMutation,
	useGenerateTotpSecretQuery
} from '@/graphql/generated/output'

import { TypeEnableTotpSchema } from '../types'

import { ROUTES } from '@/shared/constants'

export function useTotpEnable() {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)

	const { data: generetedTotp, loading: isSecretLoading } =
		useGenerateTotpSecretQuery({
			onError: onErrorGenerateTotp
		})

	function onErrorGenerateTotp(err: ApolloError) {
		toast.error('Помилка', { description: err.message })
		setRedirectPath(ROUTES.HOME.path)
	}

	const [enableTotp, { loading: isEnableTotpLoading }] =
		useEnableTotpMutation({
			onCompleted: onCompletedEnableTotp,
			onError: onErrorEnableTotp
		})

	function onCompletedEnableTotp() {
		toast.success('Двофакторна автентифікація увімкнена успішно')
		setRedirectPath(ROUTES.HOME.path)
	}

	function onErrorEnableTotp(err: ApolloError) {
		toast.error('Помилка', { description: err.message })
	}

	function onSubmit(data: TypeEnableTotpSchema) {
		if (!generetedTotp?.generateTotpSecret.secret) return

		enableTotp({
			variables: {
				data: {
					...data,
					secret: generetedTotp.generateTotpSecret.secret
				}
			}
		})
	}

	return {
		redirectPath,
		isLoading: isEnableTotpLoading && isSecretLoading,
		onSubmit,
		...generetedTotp?.generateTotpSecret
	}
}
