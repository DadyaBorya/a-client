import { LucideIcon } from 'lucide-react'

import { Permission } from '@/graphql/generated/output'

export interface Route {
	label: string
	href: string
	icon: LucideIcon
	permissions?: Permission[]
}

export interface SidebarRoute extends Route {}
