import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { useFindPfuByIdQuery } from '@/graphql/generated/output'

import { ROUTES } from '@/shared/constants'

export function useFindPfuProcess(id: string) {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)

	const { data, loading, error, refetch } = useFindPfuByIdQuery({
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
		data: data?.findPfuById,
		isLoading: loading,
		refetch,
		redirectPath
	}
}
