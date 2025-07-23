import z from 'zod'

export const createDmsuProcessSchema = z.object({
	personInfoFile: z
		.instanceof(File, { message: 'Файл обовʼязковий' })
		.refine(file => !file || file.size !== 0 || file.size <= 5000000, {
			message: 'Файл занадто великий'
		}),

	isAi: z.boolean().optional()
})

export type TypeCreateDmsuProcessSchema = z.infer<
	typeof createDmsuProcessSchema
>
