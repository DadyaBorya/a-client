import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { useFindDmsuByIdQuery } from '@/graphql/generated/output'

import { ROUTES } from '@/shared/constants'

export function useFindDmsuProcess(id: string) {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)

	const { data, loading, error, refetch } = useFindDmsuByIdQuery({
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
		data: data?.findDmsuById,
		isLoading: loading,
		refetch,
		redirectPath
	}
}
