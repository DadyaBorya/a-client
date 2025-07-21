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
			[Permission.ProcessReadAll]: {
				label: 'Перегляд усіх запитів'
			},
			[Permission.ProcessReadOwn]: {
				label: 'Перегляд власних запитів'
			}
		}
	},
	{
		groupLabel: 'Обробка файлів ГСЦ МВС',
		permissions: {
			[Permission.HstsMvsCreate]: {
				label: 'Створення записів'
			}
		}
	},
	{
		groupLabel: 'Обробка файлів ДМСУ',
		permissions: {
			[Permission.DmsuCreate]: {
				label: 'Створення записів'
			}
		}
	}
]
