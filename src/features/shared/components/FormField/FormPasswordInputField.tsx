'use client'

import { Control, FieldPath, FieldValues } from 'react-hook-form'

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	PasswordInput
} from '@/shared/components/ui'

interface FormInputFieldProps<T extends FieldValues> {
	control: Control<T>
	name: FieldPath<T>
	label: string
	placeholder?: string
	description?: string
	disabled?: boolean
}

export function FormPasswordInputField<T extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	description,
	disabled = false
}: FormInputFieldProps<T>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<PasswordInput
							{...field}
							disabled={disabled}
							placeholder={placeholder}
						/>
					</FormControl>
					<FormMessage />
					{description && (
						<FormDescription>{description}</FormDescription>
					)}
				</FormItem>
			)}
		/>
	)
}
