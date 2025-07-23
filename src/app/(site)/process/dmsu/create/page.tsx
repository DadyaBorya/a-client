'use client'

import { Permission } from '@/graphql/generated/output'

import { CreateDmsuProcessForm } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'
import { BorderLayout } from '@/shared/components/layouts'

const AuthenticatedCreateDmsuForm = withAuth(
	function CreateDmsuFormContent() {
		return (
			<BorderLayout>
				<CreateDmsuProcessForm />
			</BorderLayout>
		)
	},
	{
		requiredPermissions: [Permission.DmsuCreate]
	}
)

export default function CreateDmsuFormPage() {
	return <AuthenticatedCreateDmsuForm />
}
