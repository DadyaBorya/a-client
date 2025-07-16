export function formatDate(date: string | Date) {
	return new Date(date).toLocaleString('uk-UA', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	})
}
