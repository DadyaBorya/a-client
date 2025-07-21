import { Metadata } from 'next'

import { UpdateUserForm } from '@/components/features/account/update'
import { BorderWrapper } from '@/components/ui/elements'

export const metadata: Metadata = {
	title: 'Оновлення користувача'
}

export default function UpdateUser() {
	return (
		<BorderWrapper>
			<UpdateUserForm />
		</BorderWrapper>
	)
}
