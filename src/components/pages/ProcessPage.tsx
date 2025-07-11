'use client'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

function ProcessPage() {
	return <div>ProcessPage</div>
}

export default withAuth(
	ProcessPage,
	[
		Permission.RequestReadAll,
		Permission.RequestReadOwn,
		Permission.RequestReadAll,
		Permission.RequestReadOwn
	],
	false
)
