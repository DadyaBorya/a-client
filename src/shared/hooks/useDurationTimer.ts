import { useEffect, useState } from 'react'

import { formatDuration } from '../utils'

export function useDurationTimer(
	fromRaw: Date | string,
	toRaw?: Date | string
): string {
	const [now, setNow] = useState(() => new Date())

	useEffect(() => {
		if (toRaw) return
		const interval = setInterval(() => setNow(new Date()), 1000)
		return () => clearInterval(interval)
	}, [toRaw])

	const from = fromRaw instanceof Date ? fromRaw : new Date(fromRaw)
	const to = toRaw ? (toRaw instanceof Date ? toRaw : new Date(toRaw)) : now

	const durationMs = to.getTime() - from.getTime()
	return formatDuration(durationMs)
}
