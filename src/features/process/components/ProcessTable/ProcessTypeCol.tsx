import { ProcessType } from '@/graphql/generated/output'

import { PROCESS_TYPES } from '@/features/process'

export function ProcessTypeCol({ type }: { type: ProcessType }) {
	return <div>{PROCESS_TYPES[type]}</div>
}
