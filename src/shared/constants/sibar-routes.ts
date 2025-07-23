import { Factory, FolderSearch, Home, User } from 'lucide-react'

import { Permission } from '@/graphql/generated/output'

import { SidebarRoute } from '../types'

import { ROUTES } from './routes'

export const SIDEBAR_ROUTES: SidebarRoute[] = [
	{
		label: 'Головна',
		href: ROUTES.HOME.path,
		icon: Home
	},
	{
		label: 'Користувачі',
		href: ROUTES.ACCOUNT.PROFILES.path,
		icon: User,
		permissions: [Permission.UserRead]
	},
	{
		label: 'Обробка',
		href: ROUTES.PROCESS.HOME.path,
		icon: Factory,
		permissions: [
			Permission.ProcessReadAll,
			Permission.ProcessReadOwn,
			Permission.HstsMvsCreate
		]
	},
	{
		label: 'Пошук',
		href: ROUTES.SEARCH.path,
		icon: FolderSearch
	}
]
