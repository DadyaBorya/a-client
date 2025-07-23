'use client'

import { LogOut, RotateCcwKey, User } from 'lucide-react'
import Link from 'next/link'

import { DropdownMenuItem, FullScreenSpinner } from '@/shared/components/ui'
import { ROUTES } from '@/shared/constants'
import { useLogout } from '@/shared/hooks'

export function UserDropdownMenuItems() {
	const { logout } = useLogout()

	return (
		<>
			<Link href={ROUTES.ACCOUNT.OWN_PROFILE.path}>
				<DropdownMenuItem>
					<User className='mr-2 size-5' />
					Мій Профіль
				</DropdownMenuItem>
			</Link>

			<Link href={ROUTES.ACCOUNT.CHANGE_PASSWORD.path}>
				<DropdownMenuItem>
					<RotateCcwKey className='mr-2 size-5' />
					Зміна паролю
				</DropdownMenuItem>
			</Link>

			<DropdownMenuItem onClick={() => logout()}>
				<LogOut className='mr-2 size-5' />
				Вихід
			</DropdownMenuItem>
		</>
	)
}
