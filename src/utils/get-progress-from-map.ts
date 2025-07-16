export function getProgressFromMap<T extends string>(
	stage: T,
	stageMap: Record<T, string>
): number {
	const stages = Object.keys(stageMap) as T[]
	const index = stages.indexOf(stage)

	if (index === -1) return 0

	const total = stages.length - 1
	return Math.round((index / total) * 100)
}
