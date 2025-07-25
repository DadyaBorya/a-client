import { ProcessType } from '@/graphql/generated/output'

export const PROCESS_TYPES = {
	[ProcessType.HstsMvs]: 'ГСЦ ВМС',
	[ProcessType.Dmsu]: 'ДМСУ',
	[ProcessType.Pfu]: 'ПФУ',
	[ProcessType.Erd]: 'ЄРД'
}
