import { SessionModel } from '@/graphql/generated/output'

import { Spinner } from '@/shared/components/ui'
import { formatDate } from '@/shared/utils'

interface ProfileSessionCardProps {
	data?: SessionModel
	isLoading?: boolean
	isCurrent?: boolean
}

export function ProfileSessionCard({
	data,
	isLoading = false,
	isCurrent = false
}: ProfileSessionCardProps) {
	if (!data || isLoading) {
		return <Spinner />
	}

	const text = isCurrent ? 'Поточна сесія' : 'Сесія'

	return (
		<div className='border-t p-4 shadow-sm'>
			<div className='mb-4'>
				<h3 className='text-base'>
					{text} з {data.metadata.location.city},{' '}
					{data.metadata.location.country}
				</h3>
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
			</div>
		</div>
	)
}
