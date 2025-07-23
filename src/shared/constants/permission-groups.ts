import { Permission } from '@/graphql/generated/output'

import { PermissionGroup } from '../types'

export const PERMISSION_GROUPS: PermissionGroup[] = [
	{
		groupLabel: 'Користувачі',
		permissions: {
			[Permission.UserCreate]: 'Створення користувачів',
			[Permission.UserDelete]: 'Видалення користувачів',
			[Permission.UserRead]: 'Перегляд користувачів',
			[Permission.UserResetPassword]: 'Скидання пароля',
			[Permission.UserUpdate]: 'Оновлення користувачів'
		}
	},
	{
		groupLabel: 'Запити на обробку файлів',
		permissions: {
			[Permission.ProcessReadAll]: 'Перегляд усіх запитів',
			[Permission.ProcessReadOwn]: 'Перегляд власних запитів'
		}
	},
	{
		groupLabel: 'Обробка файлів ГСЦ МВС',
		permissions: {
			[Permission.HstsMvsCreate]: 'Створення записів'
		}
	},
	{
		groupLabel: 'Обробка файлів ДМСУ',
		permissions: {
			[Permission.DmsuCreate]: 'Створення записів'
		}
	}
]
