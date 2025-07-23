import { useFindAllUsersQuery } from '@/graphql/generated/output'

import { Pagination } from '@/shared/types'

export function useFindAllAccounts(filters: Pagination) {
	const { data, loading: isLoading } = useFindAllUsersQuery({
		variables: { data: filters }
	})

	return {
		data: data?.findAllUsers,
		isLoading
	}
}
