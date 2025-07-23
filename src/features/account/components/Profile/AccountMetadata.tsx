import { Calendar } from 'lucide-react'

import { formatDate } from '@/shared/utils'

interface AccountMetadataProps {
	id: string
	createdAt: string
}

export function AccountMetadata({ id, createdAt }: AccountMetadataProps) {
	return (
		<div className='flex gap-x-12'>
			<div>
				<dt className='text-muted-foreground font-semibold'>
					ID користувача
				</dt>
				<dd className='text-foreground mt-1 font-mono break-all'>
					{id}
				</dd>
			</div>

			<div>
				<dt className='text-muted-foreground font-semibold'>
					Дата створення
				</dt>
				<dd className='text-foreground mt-1 flex items-center'>
					<Calendar className='text-muted-foreground mr-1 h-4 w-4' />
					{formatDate(createdAt)}
				</dd>
			</div>
		</div>
	)
}
