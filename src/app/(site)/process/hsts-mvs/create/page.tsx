'use client'

import { Permission } from '@/graphql/generated/output'

import { CreateHstsMvsProcessForm } from '@/features/process'
import { withAuth } from '@/features/shared/hocs'
import { BorderLayout } from '@/shared/components/layouts'

const AuthenticatedCreateHstsMvsForm = withAuth(
	function CreateHstsMvsFormContent() {
		return (
			<BorderLayout>
				<CreateHstsMvsProcessForm />
			</BorderLayout>
		)
	},
	{
		requiredPermissions: [Permission.HstsMvsCreate]
	}
)

export default function CreateHstsMvsFormPage() {
	return <AuthenticatedCreateHstsMvsForm />
}
