import { useFindUserByIdQuery } from '@/graphql/generated/output'

export function useFindUserById(id: string) {
	const { data, loading, error } = useFindUserByIdQuery({
		variables: { id },
		skip: !id,
		errorPolicy: 'all'
	})

	return { data: data?.findUserById, loading, error }
}
