import axios from 'axios'

import { ProcessType } from '@/graphql/generated/output'

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL_REST

const downloadUrls: Record<ProcessType, string> = {
	[ProcessType.HstsMvs]: 'process/hsts-mvs/download',
	[ProcessType.Dmsu]: 'process/dmsu/download',
	[ProcessType.Pfu]: 'process/pfu/download'
}

export class FileDownloadService {
	static async downloadProcessFile(
		id: string,
		type: ProcessType,
		filename: string
	) {
		try {
			const url = `${baseUrl}/${downloadUrls[type]}/${id}`
			const response = await axios.get(url, {
				withCredentials: true,
				responseType: 'blob'
			})

			FileDownloadService.triggerDownload(response.data, filename)
		} catch (error) {
			console.error('Failed to download file:', error)
		}
	}

	private static triggerDownload(data: BlobPart, filename: string) {
		const blob = new Blob([data])
		const url = window.URL.createObjectURL(blob)

		const link = document.createElement('a')
		link.href = url
		link.setAttribute('download', filename)
		document.body.appendChild(link)
		link.click()
		link.remove()

		window.URL.revokeObjectURL(url)
	}
}
