import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { useFindErdByIdQuery } from '@/graphql/generated/output'

import { ROUTES } from '@/shared/constants'

export function useFindErdProcess(id: string) {
	const [redirectPath, setRedirectPath] = useState<string | null>(null)

	const { data, loading, error, refetch } = useFindErdByIdQuery({
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
		data: data?.findErdById,
		isLoading: loading,
		refetch,
		redirectPath
	}
}
