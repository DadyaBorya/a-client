import { useFindMeQuery } from '@/graphql/generated/output'

export function useFindMe() {
	const { data, loading, error } = useFindMeQuery()

	return { data: data?.findMe, loading, error }
}
