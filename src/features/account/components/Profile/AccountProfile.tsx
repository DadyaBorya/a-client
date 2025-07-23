import { useParams } from 'next/navigation'

import { BaseAccountProfile } from './BaseAccountProfile'
import { useFindProfile } from '@/features/account'

export function AccountProfile() {
	const { id } = useParams()

	const { data, isLoading } = useFindProfile(id as string)

	return <BaseAccountProfile data={data} isLoading={isLoading} />
}
