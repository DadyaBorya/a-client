'use client'

import { Search } from 'lucide-react'
import { Control, FieldPath, FieldValues } from 'react-hook-form'

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/common'
import { Input } from '@/components/ui/common/input'

import { cn } from '@/utils'

interface FormSearchFieldProps<T extends FieldValues> {
	control: Control<T>
	name: FieldPath<T>
	label?: string
	placeholder?: string
	description?: string
	disabled?: boolean
	className?: string
}

export function FormSearchField<T extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	description,
	disabled = false,
	className
}: FormSearchFieldProps<T>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={className}>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<div className='relative'>
							<Search className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
							<Input
								{...field}
								disabled={disabled}
								placeholder={placeholder}
								type='search'
								className={cn(
									'pl-9',
									field.disabled &&
										'cursor-not-allowed opacity-50'
								)}
							/>
						</div>
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
