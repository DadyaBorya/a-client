import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/common'

import { useSidebarStore } from '@/hooks/sidebar'

export function SidebarHeader() {
	const { isCollapsed, open, close } = useSidebarStore()

	return isCollapsed ? (
		<div className='mb-4 hidden w-full items-center justify-center pt-4 lg:flex'>
			<Button onClick={open} variant='ghost' size='icon'>
				<ArrowRightFromLine className='size-5' />
			</Button>
		</div>
	) : (
		<div className='mb-2 flex w-full items-center justify-between p-3 pl-4'>
			<h2 className='text-foreground text-lg font-semibold'>Навігація</h2>
			<Button onClick={close} variant='ghost' size='icon'>
				<ArrowLeftFromLine className='size-5' />
			</Button>
		</div>
	)
}
