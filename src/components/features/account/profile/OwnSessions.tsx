import { PageSpinner } from '@/components/ui/elements'

import {
	FindSessionsByIdDocument,
	FindSessionsByUsersDocument,
	useFindCurrentSessionQuery,
	useFindSessionsByUsersQuery,
	useRemoveSessionMutation
} from '@/graphql/generated/output'

import { SessionCard } from './SessionCard'
import { toast } from 'sonner'

export function OwnSessions() {
	const {
		data: allSessions,
		loading: allLoading,
		error: allError
	} = useFindSessionsByUsersQuery()
	const {
		data: currentSession,
		loading: currentLoading,
		error: currentError
	} = useFindCurrentSessionQuery()

	const [remove] = useRemoveSessionMutation({
		onCompleted() {
			toast.info('Сесія видалена.')
		},
		refetchQueries: [
			{
				query: FindSessionsByUsersDocument
			}
		]
	})

	if (allLoading || currentLoading) {
		return <PageSpinner />
	}

	if (!allSessions?.findSessions || !currentSession?.findCurrentSession) {
		return <PageSpinner />
	}

	const otherSessions = allSessions.findSessions.filter(
		session => session.id !== currentSession.findCurrentSession.id
	)

	function onRemove(id: string) {
		remove({ variables: { id } })
	}

	return (
		<div className='space-y-6 px-6 py-4'>
			<section>
				<h2 className='font-medium'>Поточна сесія</h2>
				<SessionCard
					key={currentSession.findCurrentSession.id}
					data={currentSession.findCurrentSession}
				/>
			</section>

			{otherSessions.length > 0 && (
				<section>
					<h2 className='font-medium'>Інші сесії</h2>
					<div className=''>
						{otherSessions.map(session => (
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
