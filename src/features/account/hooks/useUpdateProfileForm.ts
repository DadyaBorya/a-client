import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { TypeUpdateProfileSchema, updateProfileSchema } from '../types'

import { useFindProfile } from './useFindProfile'
import { ROUTES } from '@/shared/constants'

export function useUpdateProfileForm(id: string) {
	const router = useRouter()

	const form = useForm<TypeUpdateProfileSchema>({
		resolver: zodResolver(updateProfileSchema),
		defaultValues: {
			id
		}
	})

	const { data, error } = useFindProfile(id)

	useEffect(() => {
		if (data) {
			const userData = {
				id,
				username: data.username,
				displayName: data.displayName,
				isSuperUser: data.isSuperUser,
				permissions: data.permissions,
				isBlocked: data.isBlocked
			}

			form.reset(userData)
		}

		if (error) {
			toast.error('Помилка', { description: error.message })
			router.push(ROUTES.HOME.path)
		}
	}, [data, form.reset])

	return { form }
}
