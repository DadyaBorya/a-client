import { useFindMeQuery } from '@/graphql/generated/output'

export function useFindMeProfile() {
	const { data, loading: isLoading, error } = useFindMeQuery()

	return { data: data?.findMe, isLoading, error }
}
