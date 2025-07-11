import { Permission } from '@/graphql/generated/output'

import { useUserStore } from '@/hooks/user'

import { SIDEBAR_ROUTES } from '@/libs/constants'

import { SidebarItem } from './SidebarItem'

export function SidebarNav() {
	const { user } = useUserStore()

	if (!user) {
		return <></>
	}

	const hasPermission = (routePermissions?: Permission[]) => {
		if (user.isSuperUser) {
			return true
		}

		if (!routePermissions || routePermissions.length === 0) {
			return true
		}

		return routePermissions.some(permission =>
			user.permissions?.includes(permission)
		)
	}

	const visibleRoutes = SIDEBAR_ROUTES.filter(route =>
		hasPermission(route.permissions)
	)

	return (
		<div className='space-y-2 px-2 pt-4 lg:pt-0'>
			{visibleRoutes.map(route => (
				<SidebarItem route={route} key={route.href} />
			))}
		</div>
	)
}
