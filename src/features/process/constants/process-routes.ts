import { FilePlus, FolderOpen, User } from 'lucide-react'

import { Permission } from '@/graphql/generated/output'

import { ROUTES } from '@/shared/constants'
import { Route } from '@/shared/types'

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
	},
	{
		title: 'Обробка файлів ДМСУ',
		items: [
			{
				label: 'Створення записів',
				href: ROUTES.PROCESS.DMSU.CREATE.path,
				icon: FilePlus,
				permissions: [Permission.DmsuCreate]
			}
		]
	},
	{
		title: 'Обробка файлів ПФУ',
		items: [
			{
				label: 'Створення записів',
				href: ROUTES.PROCESS.PFU.CREATE.path,
				icon: FilePlus,
				permissions: [Permission.PfuCreate]
			}
		]
	},
	{
		title: 'Обробка файлів ЄРД',
		items: [
			{
				label: 'Створення записів',
				href: ROUTES.PROCESS.ERD.CREATE.path,
				icon: FilePlus,
				permissions: [Permission.ErdCreate]
			}
		]
	}
]
