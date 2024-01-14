'use server'

import { z } from 'zod'
import { ShortenSchema } from './validations'
import axios from 'axios'
import { cleanuri } from '@/data/api'

export const shortenUrl = async (formData: z.infer<typeof ShortenSchema>) => {
	const validationsField = ShortenSchema.safeParse(formData)

	if (!validationsField.success) {
		return {
			error: 'Invalid URL',
		}
	}

	const { url } = validationsField.data

	const response = await axios.post<{ result_url: string }>(cleanuri, { url })

	return {
		success: response.data.result_url,
	}
}
