'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/common'

export default function NotFound() {
	const router = useRouter()

	return (
		<div className='flex min-h-screen flex-col items-center justify-center px-4 text-center'>
			<h1 className='text-primary text-5xl font-bold'>404</h1>
			<p className='text-muted-foreground mt-4 text-lg'>
				Сторінку не знайдено або вона більше не існує.
			</p>
			<Button className='mt-6' onClick={() => router.back()}>
				Повернутись назад
			</Button>
		</div>
	)
}
