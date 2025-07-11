'use client'

import { Skeleton } from '@/components/ui/common'

interface SecretBoxProps {
	value?: string
}

export const SecretBox = ({ value }: SecretBoxProps) => {
	return (
		<div className='flex justify-center'>
			{value ? (
				<div className='rounded-md border px-4 py-2 text-center font-mono text-lg select-all'>
					{value}
				</div>
			) : (
				<Skeleton className='h-10 w-48 rounded-md' />
			)}
		</div>
	)
}
