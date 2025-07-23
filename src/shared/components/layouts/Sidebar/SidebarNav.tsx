import { Permission } from '@/graphql/generated/output'

import { SidebarItem } from './SidebarItem'
import { SIDEBAR_ROUTES } from '@/shared/constants'
import { UserStoreModel, useUserStore } from '@/shared/stores'

function hasPermission(user: UserStoreModel, routePermissions?: Permission[]) {
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

export function SidebarNav() {
	const { user } = useUserStore()

	if (!user) {
		return
	}

	const visibleRoutes = SIDEBAR_ROUTES.filter(route =>
		hasPermission(user, route.permissions)
	)

	return (
		<div className='space-y-2 px-2 pt-4 lg:pt-0'>
			{visibleRoutes.map(route => (
				<SidebarItem route={route} key={route.href} />
			))}
		</div>
	)
}
