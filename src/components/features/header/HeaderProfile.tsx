import { useApolloClient } from '@apollo/client'
import { LogOut, RotateCcwKey, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/common'
import { FullScreenSpinner, UserAvatar } from '@/components/ui/elements'

import { useLogoutMutation } from '@/graphql/generated/output'

import { useCurrentUser, useUserStore } from '@/hooks/user'

import { ROUTES } from '@/libs/constants'

export function HeaderProfile() {
	const router = useRouter()
	const client = useApolloClient()
	const { user } = useCurrentUser()
	const { clear } = useUserStore()

	const [logout, { loading }] = useLogoutMutation({
		onCompleted() {
			toast.success('Вихід виконано успішно')
			router.push(ROUTES.AUTH.LOGIN.path)
			client.clearStore()
			clear()
		},
		onError(err) {
			toast.error('Помилка під час виходу', {
				description: err.message || 'Спробуйте ще раз пізніше.'
			})
		}
	})

	if (loading) {
		return <FullScreenSpinner />
	}

	if (!user?.username) {
		return <UserAvatar />
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar username={user.username} />
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-[230px]'>
				<div className='flex items-center gap-x-3 p-2'>
					<UserAvatar username={user.username} />
					<h2 className='text-foreground font-medium'>
						{user.username}
						<p className='text-muted-foreground text-sm'>
							{user.displayName}
						</p>
					</h2>
				</div>
				<DropdownMenuSeparator />
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
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
