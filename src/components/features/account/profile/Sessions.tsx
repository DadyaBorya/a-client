import { toast } from 'sonner'

import { PageSpinner } from '@/components/ui/elements'

import {
	FindSessionsByIdDocument,
	useFindSessionsByIdQuery,
	useRemoveSessionMutation
} from '@/graphql/generated/output'

import { SessionCard } from './SessionCard'

export function Sessions({ id }: { id: string }) {
	const {
		data: allSessions,
		loading: allLoading,
		error: allError
	} = useFindSessionsByIdQuery({ variables: { id } })

	const [remove] = useRemoveSessionMutation({
		onCompleted() {
			toast.info('Сесія видалена.')
		},
		refetchQueries: [
			{
				query: FindSessionsByIdDocument,
				variables: { id }
			}
		]
	})

	if (allLoading) {
		return <PageSpinner />
	}

	if (!allSessions?.findSessionsById) {
		return <PageSpinner />
	}

	function onRemove(id: string) {
		remove({ variables: { id } })
	}

	return (
		<div className='space-y-6 px-6 py-4'>
			{allSessions.findSessionsById.length > 0 && (
				<section>
					<h2 className='font-medium'>Cесії</h2>
					<div className=''>
						{allSessions.findSessionsById.map(session => (
							<SessionCard
								onRemove={onRemove}
								key={session.id}
								data={session}
							/>
						))}
					</div>
				</section>
			)}
		</div>
	)
}
