import { OrderDirection } from '@/graphql/generated/output'

export type Pagination = {
	orderBy: string
	orderDirection?: OrderDirection
	limit?: number
	skip?: number
	searchFor?: string
}
