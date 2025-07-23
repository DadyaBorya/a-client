import {
	useFindAllProcessQuery,
} from '@/graphql/generated/output'

import { Pagination } from '@/shared/types'

export function useFindAllProcesses(filters: Pagination) {
	const { data, loading: isLoading } = useFindAllProcessQuery({
		variables: { data: filters }
	})

	return {
		data: data?.findAllProcesses,
		isLoading
	}
}
