import { Control, FieldPath, FieldValues } from 'react-hook-form'

import { FormSelectField } from './FormSelectField'

export function FormLimitSelectField<T extends FieldValues>({
	control,
	name
}: {
	control: Control<T>
	name: FieldPath<T>
}) {
	return (
		<FormSelectField
			className='mt-auto'
			control={control}
			name={name}
			options={[
				{ label: '10', value: 10 },
				{ label: '20', value: 20 },
				{ label: '50', value: 50 },
				{ label: '100', value: 100 }
			]}
		/>
	)
}
