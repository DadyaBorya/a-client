import { Permission } from '@/graphql/generated/output'

import { permissionGroups } from '@/libs/constants'

export type GroupedPermissions = {
	groupLabel: string
	permissions: {
		permission: Permission
		label: string
		description?: string
	}[]
}

export function groupPermissions(
	userPermissions: Permission[]
): GroupedPermissions[] {
	return permissionGroups
		.map(group => {
			const filteredPermissions = Object.entries(group.permissions)
				.filter(([permission]) =>
					userPermissions.includes(permission as Permission)
				)
				.map(([permission, info]) => ({
					permission: permission as Permission,
					label: info.label
				}))

			if (filteredPermissions.length === 0) return null

			return {
				groupLabel: group.groupLabel,
				permissions: filteredPermissions
			}
		})
		.filter(Boolean) as GroupedPermissions[]
}
