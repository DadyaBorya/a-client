'use client'

import { UserDropdownMenuItems } from './UserDropdownMenuItems'
import { ProfileAvatar } from '@/shared/components/common'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/shared/components/ui'
import { useUserStore } from '@/shared/stores'

export function HeaderProfile() {
	const { user } = useUserStore()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<ProfileAvatar username={user?.username} loading={!user} />
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-[230px]'>
				<div className='flex items-center gap-x-3 p-2'>
					<ProfileAvatar username={user?.username} />
					<h2 className='text-foreground font-medium'>
						{user?.username}
						<p className='text-muted-foreground text-sm'>
							{user?.displayName}
						</p>
					</h2>
				</div>
				<DropdownMenuSeparator />
				<UserDropdownMenuItems />
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
