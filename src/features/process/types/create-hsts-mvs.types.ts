import z from 'zod'

export const createHstsMvsProcessSchema = z.object({
	driverLicenseFile: z
		.instanceof(File, { message: 'Файл обовʼязковий' })
		.refine(file => !file || file.size !== 0 || file.size <= 5000000, {
			message: 'Файл занадто великий'
		})
		.optional(),
	carInfoFile: z
		.instanceof(File, { message: 'Файл обовʼязковий' })
		.refine(file => !file || file.size !== 0 || file.size <= 5000000, {
			message: 'Файл занадто великий'
		}),
	isAi: z.boolean().optional()
})

export type TypeCreateHstsMvsProcessSchema = z.infer<
	typeof createHstsMvsProcessSchema
>
