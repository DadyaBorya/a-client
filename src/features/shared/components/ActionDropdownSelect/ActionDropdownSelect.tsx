import { LucideIcon, MoreVertical } from 'lucide-react'
import Link from 'next/link'

import { Permission } from '@/graphql/generated/output'

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/components/ui'
import { useUserStore } from '@/shared/stores'
import { assertPermission } from '@/shared/utils'

interface ActionDropdownSelectProps {
	data: {
		label: string
		href: string
		icon: LucideIcon
		permissions?: Permission[]
	}[]
}

export function ActionDropdownSelect({ data }: ActionDropdownSelectProps) {
	const { user } = useUserStore()

	if (!user) return null

	const availableActions = data.filter(action =>
		assertPermission(
			user.permissions,
			user.isSuperUser,
			action.permissions || []
		)
	)

	if (availableActions.length === 0) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className='mt-auto'>
				<Button variant='outline'>
					<MoreVertical />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{availableActions.map(({ href, icon: Icon, label }) => (
					<Link key={href} href={href}>
						<DropdownMenuItem>
							<Icon className='mr-2 size-5' />
							{label}
						</DropdownMenuItem>
					</Link>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
