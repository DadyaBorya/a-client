'use client'

import { Permission } from '@/graphql/generated/output'

import { groupPermissions } from '@/utils'

export function UserPermissions({
	permissions
}: {
	permissions: Permission[]
}) {
	const grouped = groupPermissions(permissions)

	if (grouped.length === 0) {
		return (
			<div className='text-muted-foreground text-sm'>
				Немає спеціальних дозволів
			</div>
		)
	}

	return (
		<div className=''>
			<h3 className='text-muted-foreground text-sm font-medium'>
				Дозволи
			</h3>

			<div className='grid grid-cols-3 gap-y-2'>
				{grouped.map(group => (
					<div key={group.groupLabel}>
						<div className='mb-1 text-sm font-semibold'>
							{group.groupLabel}
						</div>
						<div className='text-muted-foreground flex flex-col gap-2 text-sm'>
							{group.permissions.map(({ permission, label }) => (
								<span
									key={permission}
									className='bg-muted w-fit rounded px-2 py-0.5'
								>
									{label}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
