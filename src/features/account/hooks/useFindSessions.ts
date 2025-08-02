import {
	useFindSessionsByIdQuery,
	useFindSessionsQuery
} from '@/graphql/generated/output'

export function useFindSessions(currentUserId: string, userId: string) {
	if (currentUserId === userId) {
		const { data, loading: isLoading, refetch } = useFindSessionsQuery()
		return { data: data?.findSessions, isLoading, refetch }
	} else {
		const {
			data,
			loading: isLoading,
			refetch
		} = useFindSessionsByIdQuery({
			variables: { id: userId }
		})
		return { data: data?.findSessionsById, isLoading, refetch }
	}
}
