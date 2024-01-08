import { z } from 'zod'

export const ShortenSchema = z.object({
	url: z
		.string()
		.url({ message: 'Invalid URL' })
		.min(1, { message: 'This field is required' }),
})
