'use client'

import { ArrowLeft } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/ui/common'

export function BackButton() {
	const router = useRouter()
	const pathname = usePathname()

	const isHome = pathname === '/'

	const handleBack = () => {
		router.back()
	}

	return (
		<>
			{!isHome && (
				<Button
					onClick={handleBack}
					variant='outline'
					className='flex w-[90px] items-center gap-x-2'
				>
					<ArrowLeft className='h-4 w-4' />
					Назад
				</Button>
			)}
		</>
	)
}
