import z from 'zod'

export const createHstsMvsSchema = z.object({
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

export type TypeCreateHstsMvsSchema = z.infer<typeof createHstsMvsSchema>
