import z from 'zod'

export const createErdProcessSchema = z
	.object({
		grantedInputFile: z
			.instanceof(File, { message: 'Файл обовʼязковий' })
			.refine(file => !file || file.size !== 0 || file.size <= 5000000, {
				message: 'Файл занадто великий'
			})
			.optional(),
		acceptedInputFile: z
			.instanceof(File, { message: 'Файл обовʼязковий' })
			.refine(file => !file || file.size !== 0 || file.size <= 5000000, {
				message: 'Файл занадто великий'
			})
			.optional(),

		isAi: z.boolean().optional()
	})
	.refine(data => data.grantedInputFile || data.acceptedInputFile, {
		message: 'Повинен бути вказаний принаймні один файл ',
		path: ['grantedInputFile']
	})

export type TypeCreateErdProcessSchema = z.infer<typeof createErdProcessSchema>
