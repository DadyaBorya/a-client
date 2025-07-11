'use client'

import { Control, FieldPath, FieldValues } from 'react-hook-form'

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/components/ui/common'

interface FormInputFieldProps<T extends FieldValues> {
	control: Control<T>
	name: FieldPath<T>
	label: string
	placeholder?: string
	description?: string
	disabled?: boolean
	type?: string
	className?: string
}

export function FormInputField<T extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	description,
	disabled = false,
	type = 'text',
	className
}: FormInputFieldProps<T>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={className}>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							{...field}
							disabled={disabled}
							placeholder={placeholder}
							type={type}
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
