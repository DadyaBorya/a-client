'use client'

import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'

import { Checkbox } from '@/components/ui/common'

type Option<Value extends string> = {
	value: Value
	label: string
}

interface CheckboxGroupProps<
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
	Value extends string = string
> {
	control: Control<TFieldValues>
	name: TName
	label?: string
	options: Option<Value>[]
	disabled?: boolean
	className?: string
}

export function CheckboxGroup<
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
	Value extends string = string
>({
	control,
	name,
	label,
	options,
	disabled = false,
	className
}: CheckboxGroupProps<TFieldValues, TName, Value>) {
	return (
		<div className={className}>
			{label && (
				<label className='text-muted-foreground block font-semibold'>
					{label}
				</label>
			)}

			<Controller
				control={control}
				name={name}
				render={({ field }) => {
					const selected = new Set<Value>(field.value || [])

					const toggle = (value: Value) => {
						const newSelected = new Set(selected)
						if (newSelected.has(value)) {
							newSelected.delete(value)
						} else {
							newSelected.add(value)
						}
						field.onChange(Array.from(newSelected))
					}

					return (
						<div className='flex flex-col'>
							{options.map(option => (
								<label
									key={option.value}
									htmlFor={option.value}
									className='inline-flex cursor-pointer items-center space-x-2'
								>
									<Checkbox
										id={option.value}
										checked={selected.has(option.value)}
										onCheckedChange={() =>
											toggle(option.value)
										}
										disabled={disabled}
									/>
									<span>{option.label}</span>
								</label>
							))}
						</div>
					)
				}}
			/>
		</div>
	)
}
