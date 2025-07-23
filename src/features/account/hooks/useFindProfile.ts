import { useFindUserByIdQuery } from '@/graphql/generated/output'

export function useFindProfile(id: string) {
	const {
		data,
		loading: isLoading,
		error
	} = useFindUserByIdQuery({
		variables: { id }
	})

	return { data: data?.findUserById, isLoading, error }
}
