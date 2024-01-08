'use client'

import { useState } from 'react'
import CardSection from '@/components/card-section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { z } from 'zod'
import { ShortenSchema } from '@/actions/validations'
import { shortenUrl } from '@/actions'
import { useForm } from 'react-hook-form'

export function Shorten() {
	const [success, setSuccess] = useState('')
	const form = useForm<z.infer<typeof ShortenSchema>>({
		defaultValues: {
			url: '',
		},
	})

	const onSubmit = async (formData: z.infer<typeof ShortenSchema>) => {
		const response = await shortenUrl(formData)
		if (response?.error) {
			form.setError('url', {
				type: 'custom',
				message: response.error,
			})
		}

		if (response?.success) {
			setSuccess(response.success)
			console.log('response.success', response.success)
			navigator.clipboard.writeText(response.success)
		}
	}

	return (
		<CardSection className='bg-dark-violet bg-[url("/images/bg-boost-mobile.svg")] rounded-xl'>
			<Form {...form}>
				<form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						name='url'
						render={({ field }) => (
							<>
								<FormItem>
									<Input
										{...field}
										className='bg-white'
										placeholder='Shorten a link here...'
									/>
								</FormItem>
								<FormMessage />
							</>
						)}
					/>
					<Button type='submit' className='w-full'>
						{success ? 'Copied' : 'Shorten It!'}
					</Button>
				</form>
			</Form>
		</CardSection>
	)
}
