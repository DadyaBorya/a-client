import { UserPlus } from 'lucide-react'

import { Permission } from '@/graphql/generated/output'

import { ActionDropdownSelect } from '@/features/shared'
import { ROUTES } from '@/shared/constants'

const actions = [
	{
		permissions: [Permission.UserCreate],
		href: ROUTES.ACCOUNT.CREATE.path,
		icon: UserPlus,
		label: 'Створити користувача'
	}
]

export function AccountActions() {
	return <ActionDropdownSelect data={actions} />
}
