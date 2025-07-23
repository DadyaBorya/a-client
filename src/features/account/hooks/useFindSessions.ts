import {
	useFindCurrentSessionQuery,
	useFindSessionsByIdQuery,
	useFindSessionsQuery
} from '@/graphql/generated/output'

export function useFindSessions(currentUserId: string, userId: string) {
	if (currentUserId === userId) {
		const { data, loading: isLoading } = useFindSessionsQuery()
		return { data: data?.findSessions, isLoading }
	} else {
		const { data, loading: isLoading } = useFindSessionsByIdQuery({
			variables: { id: userId }
		})
		return { data: data?.findSessionsById, isLoading }
	}
}
