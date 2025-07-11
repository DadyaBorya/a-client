import { MoreVertical } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

import { useUserStore } from '@/hooks/user'

import { Route } from '@/libs/types/core'

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '../common'

import { checkPermission } from '@/utils'

export function ActionDropdownSelect({ routes }: { routes: Route[] }) {
	const { user } = useUserStore()

	if (!user) return null

	const availableActions = routes.filter(action =>
		checkPermission(
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
