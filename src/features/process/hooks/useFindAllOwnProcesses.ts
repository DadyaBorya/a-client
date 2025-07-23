import { useFindAllOwnProcessQuery } from '@/graphql/generated/output'

import { Pagination } from '@/shared/types'

export function useFindAllOwnProcesses(filters: Pagination) {
	const { data, loading: isLoading } = useFindAllOwnProcessQuery({
		variables: { data: filters }
	})

	return {
		data: data?.findAllOwnProcesses,
		isLoading
	}
}
