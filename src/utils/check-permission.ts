import { Permission } from '@/graphql/generated/output'

export function checkPermission(
	userPermissions: Permission[],
	isSuperUser: boolean,
	requiredPermissions: Permission[]
) {
	if (isSuperUser) {
		return true
	}

	return requiredPermissions.every(permission =>
		userPermissions.includes(permission)
	)
}
