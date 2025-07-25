'use client'

import { SidebarHeader } from './SidebarHeader'
import { SidebarNav } from './SidebarNav'
import { useSidebarStore } from '@/shared/stores'
import { cn } from '@/shared/utils'

export function Sidebar() {
	const { isCollapsed } = useSidebarStore()

	return (
		<aside
			className={cn(
				'border-border bg-card fixed left-0 z-50 mt-[75px] flex h-full flex-col border-r transition-all duration-100 ease-in-out',
				isCollapsed ? 'w-16' : 'w-64'
			)}
		>
			<SidebarHeader />
			<SidebarNav />
		</aside>
	)
}
