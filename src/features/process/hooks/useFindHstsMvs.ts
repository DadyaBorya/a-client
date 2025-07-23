import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import {
	useFindDmsuByIdQuery,
	useFindHstsMvsByIdQuery
} from '@/graphql/generated/output'

import { ROUTES } from '@/shared/constants'

export function useFindHstsMvsProcess(id: string) {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)

	const { data, loading, error, refetch } = useFindHstsMvsByIdQuery({
		variables: { id },
		errorPolicy: 'all',
		fetchPolicy: 'network-only'
	})

	useEffect(() => {
		if (error) {
			toast.error('Помилка', { description: error.message })
			setRedirectPath(ROUTES.HOME.path)
		}
	}, [redirectPath, error])

	return {
		data: data?.findHstsMvsById,
		isLoading: loading,
		refetch,
		redirectPath
	}
}
