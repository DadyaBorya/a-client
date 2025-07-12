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
				href: '/1',
				icon: FolderOpen,
				permissions: [Permission.RequestReadAll]
			},
			{
				label: 'Перегляд власних запитів',
				href: '/2',
				icon: User,
				permissions: [Permission.RequestReadOwn]
			}
		]
	},
	{
		title: 'Обробка файлів ГСЦ МВС',
		items: [
			{
				label: 'Перегляд усіх записів',
				href: '/3',
				icon: FolderOpen,
				permissions: [Permission.RequestReadAll]
			},
			{
				label: 'Перегляд власних запитів',
				href: '/4',
				icon: User,
				permissions: [Permission.RequestReadOwn]
			},
			{
				label: 'Створення записів',
				href: ROUTES.PROCESS.HSTS_MVS.CREATE.path,
				icon: FilePlus,
				permissions: [Permission.RequestReadOwn]
			}
		]
	}
]
