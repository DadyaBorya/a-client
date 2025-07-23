import { Permission } from '@/graphql/generated/output'

import { PERMISSION_GROUPS } from '@/shared/constants'

interface AccountPermissionsProps {
	permissions: Permission[]
}

export function AccountPermissions({ permissions }: AccountPermissionsProps) {
	return (
		<div>
			{permissions.length !== 0 && (
				<h2 className='text-foreground text-lg font-medium'>Дозволи</h2>
			)}
			<div className='grid grid-cols-4 space-y-6'>
				{PERMISSION_GROUPS.map(
					({ groupLabel, permissions: groupPermissions }) => {
						const userPermissionsInGroup = Object.entries(
							groupPermissions
						).filter(([permissionKey]) =>
							permissions.includes(permissionKey as Permission)
						)

						if (userPermissionsInGroup.length === 0) return null

						return (
							<div key={groupLabel}>
								<h3 className='text-muted-foreground mb-2 font-semibold'>
									{groupLabel}
								</h3>
								<ul className='list-inside list-disc space-y-1'>
									{userPermissionsInGroup.map(
										([permissionKey, label]) => (
											<li
												key={permissionKey}
												className='text-foreground'
											>
												{label}
											</li>
										)
									)}
								</ul>
							</div>
						)
					}
				)}
			</div>
		</div>
	)
}
