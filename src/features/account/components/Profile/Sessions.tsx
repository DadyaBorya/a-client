import { ProfileSessionCard } from './SessionCard'
import { useFindSessions } from '@/features/account'
import { Spinner } from '@/shared/components/ui'

interface ProfileSessionsProps {
	userId: string
	currentId: string
}

export function ProfileSessions({ userId, currentId }: ProfileSessionsProps) {
	const { data, isLoading } = useFindSessions(currentId, userId)

	if (!data || isLoading) {
		return <Spinner />
	}

	return (
		<>
			{data.map(i => (
				<ProfileSessionCard key={i.id} data={i} />
			))}
		</>
	)
}
