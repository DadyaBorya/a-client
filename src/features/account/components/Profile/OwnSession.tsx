import { ProfileSessionCard } from './SessionCard'
import { useFindOwnSession } from '@/features/account'

export function OwnProfileSession() {
	const { data, isLoading } = useFindOwnSession()

	return (
		<ProfileSessionCard
			isCurrent={true}
			data={data}
			isLoading={isLoading}
		/>
	)
}
