'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/common'

import { ROUTES } from '@/libs/constants'

export default function ForbiddenPage() {
	const router = useRouter()

	return (
		<div className='flex min-h-screen flex-col items-center justify-center px-4 text-center'>
			<h1 className='text-primary text-5xl font-bold'>403</h1>
			<p className='text-muted-foreground mt-4 text-lg'>
				У вас немає доступу до цієї сторінки.
			</p>
			<p className='text-muted-foreground mt-2 text-sm'>
				Можливо, ви не маєте необхідних прав або спробували відкрити
				заборонений ресурс.
			</p>
			<Button
				className='mt-6'
				onClick={() => router.push(ROUTES.HOME.path)}
			>
				Повернутись на головну
			</Button>
		</div>
	)
}
