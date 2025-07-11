import { UserPlus } from 'lucide-react'
import Link from 'next/link'

import { DropdownMenuItem } from '@/components/ui/common'
import { ActionDropdownSelect } from '@/components/ui/elements'

import { Permission } from '@/graphql/generated/output'

import { ROUTES } from '@/libs/constants'
import { Route } from '@/libs/types/core'

const actions: Route[] = [
	{
		permissions: [Permission.UserCreate],
		href: ROUTES.ACCOUNT.CREATE.path,
		icon: UserPlus,
		label: 'Створити користувача'
	}
]

export function AccountActions() {
	return <ActionDropdownSelect routes={actions} />
}
