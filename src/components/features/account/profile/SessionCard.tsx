'use client'

import { Calendar, Globe, MapPin, Monitor, Trash2Icon } from 'lucide-react'

import { Button } from '@/components/ui/common'

import { Permission, SessionModel } from '@/graphql/generated/output'

import { useUserStore } from '@/hooks/user'

import { formatDate } from '@/utils'

export function SessionCard({
	data,
	onRemove
}: {
	data: SessionModel
	onRemove?: (id: string) => void
}) {
	const { user } = useUserStore()

	if (!user) return null

	const hasPermission =
		user.id === data.userId ||
		user.isSuperUser ||
		user.permissions.includes(Permission.UserUpdate)

	return (
		<div className='mt-2 border-b'>
			<div className='mb-3 flex items-center justify-between'>
				<div className='text-sm'>Сесія #{data.id.slice(-8)}</div>
			</div>

			<div className='grid grid-cols-5'>
				<div className='mb-3'>
					<div className='mb-1 flex items-center text-sm'>
						<MapPin className='mr-2 h-4 w-4' />
						<span className='font-medium'>Місцезнаходження</span>
					</div>
					<div className='ml-6 text-sm'>
						{data.metadata.location.city},{' '}
						{data.metadata.location.country}
					</div>
					<div className='ml-6 text-xs'>
						{data.metadata.location.latidute},{' '}
						{data.metadata.location.longitude}
					</div>
				</div>

				<div className='mb-3'>
					<div className='mb-1 flex items-center text-sm'>
						<Monitor className='mr-2 h-4 w-4' />
						<span className='font-medium'>Пристрій</span>
					</div>
					<div className='ml-6 text-sm'>
						{data.metadata.device.type} • {data.metadata.device.os}{' '}
						• {data.metadata.device.browser}
					</div>
				</div>

				<div>
					<div className='mb-1 flex items-center text-sm'>
						<Globe className='mr-2 h-4 w-4' />
						<span className='font-medium'>Мережа</span>
					</div>
					<div className='ml-6 text-sm'>IP: {data.metadata.ip}</div>
				</div>

				<div>
					<div className='mb-1 flex items-center text-sm'>
						<Calendar className='mr-2 h-4 w-4' />
						<span className='font-medium'>Дата створення</span>
					</div>
					<div className='ml-6 text-sm'>
						{' '}
						{formatDate(data.createdAt)}
					</div>
				</div>
				{hasPermission && onRemove && (
					<div>
						<Button
							variant='destructive'
							onClick={() => onRemove(data.id)}
						>
							<Trash2Icon />
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}
