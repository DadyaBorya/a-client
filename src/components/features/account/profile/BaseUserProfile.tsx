'use client'

import { ApolloError } from '@apollo/client'
import {
	AlertCircle,
	Calendar,
	KeyRound,
	Shield,
	User,
	UserPen
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/common'
import { PageSpinner } from '@/components/ui/elements'

import { Permission, UserModel } from '@/graphql/generated/output'

import { useUserStore } from '@/hooks/user'

import { ROUTES } from '@/libs/constants'

import { UserPermissions } from './UserPermissions'
import { checkPermission, formatDate } from '@/utils'

export function BaseUserProfile({
	data,
	error,
	isLoading
}: {
	data?: UserModel
	isLoading: boolean
	error?: ApolloError
}) {
	const router = useRouter()
	const { user } = useUserStore()

	useEffect(() => {
		if (error) {
			toast.error('Помилка', { description: error.message })
			router.push(ROUTES.HOME.path)
		}
	}, [data, isLoading, error])

	if (isLoading || !data || !user) return <PageSpinner />

	return (
		<div>
			<div className='flex justify-between border-b px-6 py-4'>
				<div className='flex items-center space-x-3'>
					<div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full'>
						<User className='text-primary h-6 w-6' />
					</div>
					<div>
						<h1 className='text-foreground text-xl font-semibold'>
							{data.displayName}
						</h1>
						<p className='text-muted-foreground text-sm'>
							@{data.username}
						</p>
					</div>
				</div>
				<div className='grid grid-cols-2'>
					{checkPermission(user.permissions, user.isSuperUser, [
						Permission.UserRead,
						Permission.UserUpdate
					]) && (
						<Button
							className='h-11 w-full justify-center'
							variant='ghost'
							asChild
						>
							<Link href={ROUTES.ACCOUNT.UPDATE.build(data.id)}>
								<UserPen className='mr-0 size-5' />
							</Link>
						</Button>
					)}

					{checkPermission(user.permissions, user.isSuperUser, [
						Permission.UserResetPassword
					]) && (
						<Button
							className='h-11 w-full justify-center'
							variant='ghost'
							asChild
						>
							<Link
								href={ROUTES.ACCOUNT.RESET_PASSWORD.build(
									data.id
								)}
							>
								<KeyRound className='mr-0 size-5' />
							</Link>
						</Button>
					)}
				</div>
			</div>

			<div className='space-y-4 px-6 py-4'>
				<div className='flex flex-wrap gap-2'>
					{data.isSuperUser && (
						<div className='bg-primary/10 text-primary inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium'>
							<Shield className='mr-1 h-3 w-3' />
							Супер користувач
						</div>
					)}

					{data.isTotpEnabled && (
						<div className='inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400'>
							<Shield className='mr-1 h-3 w-3' />
							TOTP увімкнено
						</div>
					)}

					{data.isBlocked && (
						<div className='bg-destructive/10 text-destructive inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium'>
							<AlertCircle className='mr-1 h-3 w-3' />
							Заблоковано
						</div>
					)}
				</div>

				<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
					<div>
						<dt className='text-muted-foreground text-sm font-medium'>
							ID користувача
						</dt>
						<dd className='text-foreground mt-1 font-mono text-sm break-all'>
							{data.id}
						</dd>
					</div>

					<div>
						<dt className='text-muted-foreground text-sm font-medium'>
							Дата створення
						</dt>
						<dd className='text-foreground mt-1 flex items-center text-sm'>
							<Calendar className='text-muted-foreground mr-1 h-4 w-4' />
							{formatDate(data.createdAt)}
						</dd>
					</div>
				</div>
				<UserPermissions permissions={data.permissions} />
			</div>
		</div>
	)
}
