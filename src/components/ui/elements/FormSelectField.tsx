'use client'

import { Control, FieldPath, FieldValues } from 'react-hook-form'

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/common'

interface Option {
	value: string | number
	label: string
}

interface FormSelectFieldProps<T extends FieldValues> {
	control: Control<T>
	name: FieldPath<T>
	label?: string
	options: Option[]
	placeholder?: string
	description?: string
	disabled?: boolean
	className?: string
}

export function FormSelectField<T extends FieldValues>({
	control,
	name,
	label,
	options,
	placeholder,
	description,
	disabled = false,
	className
}: FormSelectFieldProps<T>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={className}>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Select
							disabled={disabled}
							onValueChange={val => {
								const original = options.find(
									option => option.value.toString() === val
								)?.value

								field.onChange(original ?? val)
							}}
							value={field.value?.toString()}
							defaultValue={field.value}
						>
							<SelectTrigger>
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
							<SelectContent>
								{options.map(option => (
									<SelectItem
										key={option.value}
										value={option.value.toString()}
									>
										{option.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
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
