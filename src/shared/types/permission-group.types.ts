import { Permission } from '@/graphql/generated/output'

export type PermissionGroup = {
	groupLabel: string
	permissions: Partial<Record<Permission, string>>
}
