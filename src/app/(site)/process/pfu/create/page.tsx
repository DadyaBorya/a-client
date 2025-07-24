'use client'

import { Permission } from '@/graphql/generated/output'

import { CreatePfuProcessForm } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'
import { BorderLayout } from '@/shared/components/layouts'

const AuthenticatedCreatePfuForm = withAuth(
	function CreateHstsMvsFormContent() {
		return (
			<BorderLayout>
				<CreatePfuProcessForm />
			</BorderLayout>
		)
	},
	{
		requiredPermissions: [Permission.PfuCreate]
	}
)

export default function CreatePfuFormPage() {
	return <AuthenticatedCreatePfuForm />
}
