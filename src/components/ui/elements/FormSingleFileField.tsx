'use client'

import { Control, FieldPath, FieldValues } from 'react-hook-form'

import {
	Button,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/common'
import { Input } from '@/components/ui/common/input'

import { cn } from '@/utils'

interface FormSingleFileFieldProps<T extends FieldValues> {
	control: Control<T>
	name: FieldPath<T>
	label: string
	description?: string
	disabled?: boolean
	accept?: string
	className?: string
	onFileChange?: (file: File | null) => void
}

export function FormSingleFileField<T extends FieldValues>({
	control,
	name,
	label,
	description,
	disabled = false,
	accept,
	className,
	onFileChange
}: FormSingleFileFieldProps<T>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field: { onChange, value, ...field } }) => (
				<FormItem className={cn(className, 'mb-3')}>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<div className='flex items-center gap-4'>
							<div className='relative'>
								<Input
									{...field}
									type='file'
									disabled={disabled}
									accept={accept}
									onChange={e => {
										const file = e.target.files?.[0] || null
										onChange(file)
										if (onFileChange) onFileChange(file)
									}}
									className='absolute inset-0 cursor-pointer opacity-0'
									id={`file-input-${name}`}
								/>
								<Button
									type='button'
									variant='outline'
									disabled={disabled}
									onClick={() => {
										const input = document.getElementById(
											`file-input-${name}`
										) as HTMLInputElement
										input?.click()
									}}
								>
									Обрати файл
								</Button>
							</div>
							<div className='my-auto flex h-10 flex-1 items-center rounded-lg border px-3'>
								{value ? value.name : 'Файл не вибрано'}
							</div>
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
