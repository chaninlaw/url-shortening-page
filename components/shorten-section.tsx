'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { z } from 'zod'
import { ShortenSchema } from '@/actions/validations'
import { shortenUrl } from '@/actions'
import { useForm } from 'react-hook-form'
import { Container } from '@/components/container'
import { useToast } from '@/components/ui/use-toast'
import { CardSection } from '@/components/card-section'

export function ShortenSection() {
	const { toast } = useToast()
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
			toast({
				title: 'Copied',
				description: 'Link copied to clipboard',
			})
			navigator.clipboard.writeText(response.success)
		}
	}

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		formChange: (...event: any[]) => void
	) => {
		if (!e.target.value) {
			setSuccess('')
		}
		formChange(e)
	}

	return (
		<Container as='section' className='relative'>
			<div className='w-full after:bg-accent-foreground after:w-[100vw]  after:h-[70%] after:absolute after:inset-0 after:-z-10 after:translate-y-1/2 md:after:-translate-x-[5%]'>
				<CardSection className='bg-dark-violet bg-[url("/images/bg-boost-mobile.svg")] rounded-xl lg:p-6 lg:bg-[url("/images/bg-boost-desktop.svg")]'>
					<Form {...form}>
						<form
							className='space-y-4 md:space-y-0 md:space-x-2 md:flex md:justify-center md:items-center'
							onSubmit={form.handleSubmit(onSubmit)}
						>
							<FormField
								name='url'
								render={({ field }) => (
									<>
										<FormItem className='w-full'>
											<Input
												{...field}
												className='bg-white placeholder:text-grey'
												placeholder='Shorten a link here...'
												onChange={(e) => onChange(e, field.onChange)}
											/>
											<FormMessage />
										</FormItem>
									</>
								)}
							/>
							<Button type='submit' className='w-full md:w-fit'>
								{success ? 'Copied' : 'Shorten It!'}
							</Button>
						</form>
					</Form>
				</CardSection>
			</div>
		</Container>
	)
}
