import { heroImage } from '@/data/images'
import { Container } from './container'
import { Button } from './ui/button'
import Image from 'next/image'

export function HeroSection() {
	return (
		<section className='space-y-14 md:grid grid-cols-2 md:space-y-20 lg:my-14'>
			<div className='w-[450px] container-[unset] relative h-full md:order-2'>
				<Image
					className='relative left-6 lg:left-20'
					src={heroImage.src}
					alt={heroImage.alt}
					width={500}
					height={800}
				/>
			</div>

			<Container
				as='div'
				className='pb-14 md:text-start md:justify-start lg:space-y-2'
			>
				<h1 className='text-3xl font-bold  md:text-4xl lg:text-5xl'>
					More than just shorter links
				</h1>
				<p className='text-sm leading-6 text-grey md:text-md'>
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<div className='w-full'>
					<Button className='rounded-full px-10 py-6 md:px-4 md:py-2'>
						Get Started
					</Button>
				</div>
			</Container>
		</section>
	)
}
