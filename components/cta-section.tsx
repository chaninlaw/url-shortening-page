import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'

export function CTASection() {
	return (
		<div className='w-[100vw] md:-translate-x-[4.37%] bg-[url("/images/bg-boost-mobile.svg")] bg-dark-violet bg-cover lg:bg-[url("/images/bg-boost-desktop.svg")] lg:-translate-x-[3.91%] xl:-translate-x-[2.79%]'>
			<Container as='section' className='py-20 md:space-y-6'>
				<h2 className='text-2xl text-white'>Boost your links today</h2>
				<Button className='rounded-full px-10 py-6'>Get Started</Button>
			</Container>
		</div>
	)
}
