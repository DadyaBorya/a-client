'use client'

import { Permission } from '@/graphql/generated/output'

import { CreateErdProcessForm } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'
import { BorderLayout } from '@/shared/components/layouts'

const AuthenticatedCreateErdForm = withAuth(
	function CreateErdFormContent() {
		return (
			<BorderLayout>
				<CreateErdProcessForm />
			</BorderLayout>
		)
	},
	{
		requiredPermissions: [Permission.ErdCreate]
	}
)

export default function CreateErdFormPage() {
	return <AuthenticatedCreateErdForm />
}
