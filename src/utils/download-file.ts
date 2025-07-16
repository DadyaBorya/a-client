import axios from 'axios'

import { ProcessType } from '@/graphql/generated/output'

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL_REST

const urls = {
	[ProcessType.HstsMvs]: 'process/hsts-mvs/download'
}

export const downloadFile = async (id: string, type: ProcessType, filename: string) => {

	try {
		const response = await axios.get(`${baseUrl}/${urls[type]}/${id}`, {
			withCredentials: true,
			responseType: 'blob'
		})

		const blob = new Blob([response.data])
		const url = window.URL.createObjectURL(blob)
		const link = document.createElement('a')
		link.href = url
		link.setAttribute('download', filename)
		document.body.appendChild(link)
		link.click()
		link.remove()
		window.URL.revokeObjectURL(url)
	} catch (error) {
		console.error('Failed to download', error)
	}
}
