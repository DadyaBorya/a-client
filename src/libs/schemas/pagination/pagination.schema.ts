import z from 'zod'

export const paginationSchema = z.object({
	skip: z.number().min(0).optional(),

	limit: z.number().positive().optional(),

	orderBy: z.string().optional(),

	orderDirection: z.enum(['ASC', 'DESC']).optional(),

	searchFor: z.string().optional()
})
