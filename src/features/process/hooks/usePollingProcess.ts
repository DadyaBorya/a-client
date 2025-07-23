import { useEffect, useRef } from 'react'

export function usePollingProcess(
	finishedAt: any,
	error: string | null | undefined,
	refetch: () => void
) {
	const intervalRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		if (finishedAt || error) {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
				intervalRef.current = null
			}
			return
		}

		if (!intervalRef.current) {
			intervalRef.current = setInterval(() => {
				refetch()
			}, 1000)
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
				intervalRef.current = null
			}
		}
	}, [finishedAt, refetch, error])
}
