export const ROUTES = {
	HOME: {
		path: '/',
		label: 'Головна',
		icon: 'home'
	},
	AUTH: {
		LOGIN: {
			path: '/auth/login',
			label: 'Вхід',
			parent: 'HOME',
			icon: 'login'
		},
		TOTP_ENABLE: {
			path: '/auth/totp-enable',
			label: 'Налаштування 2FA',
			parent: 'AUTH.LOGIN',
			icon: 'shield'
		}
	},
	ACCOUNT: {
		PROFILES: {
			path: '/accounts',
			label: 'Користувачі',
			parent: 'HOME',
			icon: 'users'
		},
		OWN_PROFILE: {
			path: '/account',
			label: 'Мій профіль',
			parent: 'HOME',
			icon: 'user'
		},
		PROFILE: {
			path: '/account/[userId]',
			label: 'Профіль користувача',
			parent: 'HOME',
			dynamic: true,
			icon: 'user',
			build: (userId?: string) => `/account/${userId}`
		},
		CHANGE_PASSWORD: {
			path: '/account/change-password',
			label: 'Зміна пароля',
			parent: 'ACCOUNT.OWN_PROFILE',
			icon: 'key'
		},
		CREATE: {
			path: '/account/create',
			label: 'Створення користувача',
			parent: 'ACCOUNT.PROFILES',
			icon: 'key'
		},
		UPDATE: {
			path: '/account/update/[userId]',
			label: 'Редагування профілю',
			parent: 'ACCOUNT.PROFILE',
			dynamic: true,
			icon: 'edit',
			build: (userId: string) => `/account/update/${userId}`
		},
		RESET_PASSWORD: {
			path: '/account/reset-password/[userId]',
			label: 'Скидання пароля',
			parent: 'ACCOUNT.PROFILE',
			dynamic: true,
			icon: 'refresh',
			build: (userId: string) => `/account/reset-password/${userId}`
		}
	},
	PROCESS: {
		HOME: {
			path: '/process',
			label: 'Процеси',
			parent: 'HOME',
			icon: 'settings'
		},
		ALL_OWN: {
			path: '/process/all-own'
		},
		ALL: {
			path: '/process/all'
		},
		HSTS_MVS: {
			VIEW: {
				path: '/process/hsts-mvs',
				build: (id: string) => `/process/hsts-mvs/${id}`
			},
			CREATE: { path: '/process/hsts-mvs/create' }
		},
		DMSU: {
			VIEW: {
				path: '/process/dmsu',
				build: (id: string) => `/process/dmsu/${id}`
			},
			CREATE: { path: '/process/dmsu/create' }
		},
		PFU: {
			VIEW: {
				path: '/process/pfu',
				build: (id: string) => `/process/pfu/${id}`
			},
			CREATE: { path: '/process/pfu/create' }
		},
		ERD: {
			VIEW: {
				path: '/process/erd',
				build: (id: string) => `/process/erd/${id}`
			},
			CREATE: { path: '/process/erd/create' }
		}
	},
	SEARCH: {
		path: '/search',
		label: 'Пошук',
		parent: 'HOME',
		icon: 'search'
	},
	FORBIDDEN_PAGE: {
		path: '/403',
		label: 'Права',
		parent: 'HOME',
		icon: 'forbidden'
	}
} as const
