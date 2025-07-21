import { ProcessType } from '@/graphql/generated/output'

const types = {
	[ProcessType.HstsMvs]: 'ГСЦ ВМС',
	[ProcessType.Dmsu]: 'ДМСУ'
}

export function ProcessTypeView({ type }: { type: ProcessType }) {
	return <div>{types[type]}</div>
}
