export function formatDate(date: string | Date) {
	const d = new Date(date)

	const pad = (n: number) => n.toString().padStart(2, '0')

	const hours = pad(d.getHours())
	const minutes = pad(d.getMinutes())
	const day = pad(d.getDate())
	const month = pad(d.getMonth() + 1)
	const year = d.getFullYear()

	return `${hours}:${minutes} ${day}.${month}.${year}`
}
