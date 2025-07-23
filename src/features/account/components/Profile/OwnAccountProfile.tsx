import { BaseAccountProfile } from './BaseAccountProfile'
import { useFindMeProfile } from '@/features/account'

export function OwnAccountProfile() {
	const { data, isLoading } = useFindMeProfile()

	return <BaseAccountProfile data={data} isLoading={isLoading} />
}
