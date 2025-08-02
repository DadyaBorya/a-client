'use client'

import { useTransition } from 'react'

import { Permission, SessionModel } from '@/graphql/generated/output'

import { useRemoveSession } from '@/features/account'
import { Button, Spinner } from '@/shared/components/ui'
import { useUserStore } from '@/shared/stores'
import { assertPermission, formatDate } from '@/shared/utils'

interface ProfileSessionCardProps {
	data?: SessionModel
	isLoading?: boolean
	isCurrent?: boolean
	refetch?: () => void
}

export function ProfileSessionCard({
	data,
	refetch,
	isLoading = false,
	isCurrent = false
}: ProfileSessionCardProps) {
	const { user } = useUserStore()
	const { onSubmit } = useRemoveSession()
	const [isPending, startTransition] = useTransition()

	if (!data || isLoading || !user) {
		return <Spinner />
	}

	const canDelete =
		!isCurrent &&
		(assertPermission(user.permissions, user.isSuperUser, [
			Permission.UserUpdate
		]) ||
			user.id === data.userId)

	const handleDelete = async () => {
		await onSubmit(data.id)

		if (refetch) {
			startTransition(() => {
				refetch()
			})
		}
	}

	const text = isCurrent ? 'Поточна сесія' : 'Сесія'

	return (
		<div className='border-t p-4 shadow-sm'>
			<div className='mb-4 flex items-center justify-between'>
				<h3 className='text-base'>
					{text} з {data.metadata.location.city},{' '}
					{data.metadata.location.country}
				</h3>
				{canDelete && (
					<Button
						variant='destructive'
						size='sm'
						onClick={handleDelete}
						disabled={isPending}
					>
						Видалити
					</Button>
				)}
			</div>

			<div className='text-muted-foreground space-y-2'>
				<div className='flex items-center justify-between'>
					<span className='text-foreground'>IP-адреса</span>
					{data.metadata.ip}
				</div>

				<div className='flex items-center justify-between'>
					<span className='text-foreground'>Створено</span>
					<span>{formatDate(data.createdAt)}</span>
				</div>

				<div className='flex items-center justify-between'>
					<span className='text-foreground'>Пристрій</span>
					<span>
						{data.metadata.device.os ?? 'Невідомо'} ·{' '}
						{data.metadata.device.browser ?? 'Невідомо'} ·{' '}
						{data.metadata.device.type ?? 'Невідомо'}
					</span>
				</div>

				<div className='flex items-center justify-between'>
					<span className='text-foreground'>Координати</span>
					<span>
						{data.metadata.location.latidute},{' '}
						{data.metadata.location.longitude}
					</span>
				</div>

				{canDelete && <div>User Can Delete</div>}
			</div>
		</div>
	)
}
