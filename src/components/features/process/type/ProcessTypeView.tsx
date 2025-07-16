import { ProcessType } from '@/graphql/generated/output'

const types = {
	[ProcessType.HstsMvs]: 'ГСЦ ВМС'
}

export function ProcessTypeView({ type }: { type: ProcessType }) {
	return <div>{types[type]}</div>
}
