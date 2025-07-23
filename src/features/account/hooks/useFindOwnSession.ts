import { useFindCurrentSessionQuery } from '@/graphql/generated/output'

export function useFindOwnSession() {
	const { data, loading: isLoading } = useFindCurrentSessionQuery()

	return { data: data?.findCurrentSession, isLoading }
}
