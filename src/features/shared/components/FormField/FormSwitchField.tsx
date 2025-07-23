'use client'

import { Control, FieldPath, FieldValues } from 'react-hook-form'

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Switch
} from '@/shared/components/ui'

interface FormSwitchFieldProps<T extends FieldValues> {
	control: Control<T>
	name: FieldPath<T>
	label: string
	description?: string
	disabled?: boolean
}

export function FormSwitchField<T extends FieldValues>({
	control,
	name,
	label,
	description,
	disabled = false
}: FormSwitchFieldProps<T>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='flex w-full flex-row items-center justify-between space-x-4 rounded border p-4'>
					<div className='space-y-0.5'>
						<FormLabel className='text-base'>{label}</FormLabel>
						{description && (
							<FormDescription>{description}</FormDescription>
						)}
					</div>
					<FormControl>
						<Switch
							checked={field.value}
							onCheckedChange={field.onChange}
							disabled={disabled}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
