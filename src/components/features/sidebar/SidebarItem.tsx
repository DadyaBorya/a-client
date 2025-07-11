'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/common'

import { useSidebarStore } from '@/hooks/sidebar'

import { ROUTES } from '@/libs/constants'
import { Route } from '@/libs/types/core'

import { cn } from '@/utils'

export function SidebarItem({ route }: { route: Route }) {
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
