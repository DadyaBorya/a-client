'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/shared/components/ui'
import { ROUTES } from '@/shared/constants'
import { useSidebarStore } from '@/shared/stores'
import { SidebarRoute } from '@/shared/types'
import { cn } from '@/shared/utils'

export function SidebarItem({ route }: { route: SidebarRoute }) {
	const pathname = usePathname()
	const { isCollapsed } = useSidebarStore()

	const isActive =
		route.href === ROUTES.HOME.path
			? pathname === route.href
			: pathname.includes(route.href)

	return isCollapsed ? (
		<Button
			className={cn(
				'h-11 w-full justify-center',
				isActive && 'bg-accent'
			)}
			variant='ghost'
			asChild
		>
			<Link href={route.href}>
				<route.icon className='mr-0 size-5' />
			</Link>
		</Button>
	) : (
		<Button
			className={cn('h-11 w-full justify-start', isActive && 'bg-accent')}
			variant='ghost'
			asChild
		>
			<Link href={route.href} className='flex items-center gap-x-4'>
				<route.icon className='mr-0 size-5' />
				{route.label}
			</Link>
		</Button>
	)
}
