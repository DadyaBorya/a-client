'use client'

import Link from 'next/link'
import { JSX } from 'react'

import { Permission } from '@/graphql/generated/output'

import { Button } from '@/shared/components/ui'
import { assertPermission } from '@/shared/utils'

interface AccountActionButtonProps {
	icon: JSX.Element
	href: string
	requiredPermissions: Permission[]
	isSuperUser: boolean
	permissions: Permission[]
}

export function AccountActionButton({
	icon,
	href,
	requiredPermissions,
	isSuperUser,
	permissions
}: AccountActionButtonProps) {
	const hasAccess = assertPermission(
		permissions,
		isSuperUser,
		requiredPermissions
	)

	if (!hasAccess) return null

	return (
		<Button className='h-11 w-full justify-center' variant='ghost' asChild>
			<Link href={href}>{icon}</Link>
		</Button>
	)
}
