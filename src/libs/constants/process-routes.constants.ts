import { FilePlus, FolderOpen, User } from 'lucide-react'

import { Permission } from '@/graphql/generated/output'

import { Route } from '../types/core'

import { ROUTES } from './routes.constant'

export const PROCESS_ROUTES: { title: string; items: Route[] }[] = [
	{
		title: 'Запити на обробку файлів',
		items: [
			{
				label: 'Перегляд усіх запитів',
				href: ROUTES.PROCESS.ALL.path,
				icon: FolderOpen,
				permissions: [Permission.ProcessReadAll]
			},
			{
				label: 'Перегляд власних запитів',
				href: ROUTES.PROCESS.ALL_OWN.path,
				icon: User,
				permissions: [Permission.ProcessReadOwn]
			}
		]
	},
	{
		title: 'Обробка файлів ГСЦ МВС',
		items: [
			{
				label: 'Створення записів',
				href: ROUTES.PROCESS.HSTS_MVS.CREATE.path,
				icon: FilePlus,
				permissions: [Permission.HstsMvsCreate]
			}
		]
	}
]
