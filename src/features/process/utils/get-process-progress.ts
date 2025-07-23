import { ProcessType, Status } from '@/graphql/generated/output'

import { PROCESS_STAGES } from '../constants'

export function getProcessProgress<T extends string>(
	stage: T,
	type: ProcessType,
	status: Status
) {
	if (status === Status.Pending) {
		return 0
	}

	const stageMap = PROCESS_STAGES[type]

	if (!stageMap) {
		return 0
	}

	const stages = Object.keys(stageMap)
	const currentStageIndex = stages.indexOf(stage as string)

	if (currentStageIndex === -1) {
		return 0
	}

	if (currentStageIndex === stages.length - 1) {
		return 100
	}

	const progress = Math.round(((currentStageIndex + 1) / stages.length) * 100)

	return Math.min(progress, 100)
}
