'use client'

import { PropsWithChildren, useEffect } from 'react'

import { BackButton } from '@/shared/components/common'
import { useMediaQuery } from '@/shared/hooks'
import { useSidebarStore } from '@/shared/stores'
import { cn } from '@/shared/utils'

export function LayoutContainer({ children }: PropsWithChildren<unknown>) {
	const isMobile = useMediaQuery('(max-width: 1024px)')

	const { isCollapsed, open, close } = useSidebarStore()

	useEffect(() => {
		if (isMobile) {
			if (!isCollapsed) {
				close()
			}
		} else {
			if (isCollapsed) {
				open()
			}
		}
	}, [isMobile])

	return (
		<main
			className={cn(
				'mt-[75px] h-full flex-1 p-6',
				isCollapsed ? 'ml-16' : 'ml-16 lg:ml-64'
			)}
		>
			<div className='flex h-full flex-col space-y-4'>
				<BackButton />
				<div className='bg-card relative flex-1'>{children}</div>
			</div>
		</main>
	)
}
