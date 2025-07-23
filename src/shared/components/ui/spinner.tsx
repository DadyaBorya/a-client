'use client'

import { Loader2Icon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '@/shared/utils'

export function Spinner() {
	return <Loader2Icon className='h-7 w-7 animate-spin' />
}

export function FullScreenSpinner() {
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setVisible(false), 1000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div
			className={cn(
				'bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300',
				visible ? 'opacity-100' : 'pointer-events-none opacity-0'
			)}
		>
			<Loader2Icon className='text-primary h-20 w-20 animate-spin' />
		</div>
	)
}
