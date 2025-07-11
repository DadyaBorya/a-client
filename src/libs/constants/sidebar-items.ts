import { Factory, FolderSearch, Home, LucideIcon, User } from 'lucide-react'

import { Permission } from '@/graphql/generated/output'

import { Route } from '../types/core'

import { ROUTES } from './routes.constant'

export const SIDEBAR_ROUTES: Route[] = [
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
		href: ROUTES.PROCESS.path,
		icon: Factory,
		permissions: [
			Permission.RequestReadAll,
			Permission.RequestReadOwn,
			Permission.RequestReadAll,
			Permission.RequestReadOwn
		]
	},
	{
		label: 'Пошук',
		href: ROUTES.SEARCH.path,
		icon: FolderSearch
	}
]
