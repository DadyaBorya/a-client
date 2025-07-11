import { z } from 'zod'

import { paginationSchema } from '../pagination'

export const accountsFilterSchema = paginationSchema

export type TypeAccountFilterSchema = z.infer<typeof accountsFilterSchema>
