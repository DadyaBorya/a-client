import { Permission } from '@/graphql/generated/output'

export type PermissionInfo = {
	label: string
}

export type PermissionGroup = {
	groupLabel: string
	permissions: Partial<Record<Permission, PermissionInfo>>
}

export const permissionGroups: PermissionGroup[] = [
	{
		groupLabel: 'Користувачі',
		permissions: {
			[Permission.UserCreate]: {
				label: 'Створення користувачів'
			},
			[Permission.UserDelete]: {
				label: 'Видалення користувачів'
			},
			[Permission.UserRead]: {
				label: 'Перегляд користувачів'
			},
			[Permission.UserResetPassword]: {
				label: 'Скидання пароля'
			},
			[Permission.UserUpdate]: {
				label: 'Оновлення користувачів'
			}
		}
	},
	{
		groupLabel: 'Запити на обробку файлів',
		permissions: {
			[Permission.RequestReadAll]: {
				label: 'Перегляд усіх запитів'
			},
			[Permission.RequestReadOwn]: {
				label: 'Перегляд власних запитів'
			}
		}
	},
	{
		groupLabel: 'Обробка файлів ГСЦ МВС',
		permissions: {
			[Permission.HstsMvsReadAll]: {
				label: 'Перегляд усіх записів'
			},
			[Permission.HstsMvsReadOwn]: {
				label: 'Перегляд власних записів'
			},
			[Permission.HstsMvsCreate]: {
				label: 'Створення записів'
			}
		}
	}
]
