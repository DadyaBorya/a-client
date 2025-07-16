import { useEffect, useState } from 'react'

export function formatDuration(ms: number): string {
	const totalSeconds = Math.floor(ms / 1000)
	const hours = Math.floor(totalSeconds / 3600)
	const minutes = Math.floor((totalSeconds % 3600) / 60)
	const seconds = totalSeconds % 60

	const pad = (n: number) => n.toString().padStart(2, '0')

	if (hours > 0) {
		return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
	}
	return `${pad(minutes)}:${pad(seconds)}`
}

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
