import CardSection from '@/components/card-section'
import { Logo } from '@/components/logo'
import { Shorten } from '@/components/shorten'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	brandRecognitionIcon,
	detailedRecordsIcon,
	fullyCustomizableIcon,
	heroImage,
	socialIcons,
} from '@/data/images'
import Image from 'next/image'

export default function Home() {
	return (
		<main>
			<section className='space-y-14 pb-14'>
				<div className='container-[unset] relative h-full overflow-hidden'>
					<Image
						className='relative'
						src={heroImage.src}
						alt={heroImage.alt}
						width={500}
						height={700}
					/>
				</div>

				<div className='container flex flex-col items-center justify-center text-center space-y-4 pb-14'>
					<h1 className='text-3xl font-bold'>More than just shorter links</h1>
					<p>
						Build your brand’s recognition and get detailed insights on how your
						links are performing.
					</p>
					<Button className='rounded-full px-10 py-6'>Get Started</Button>
				</div>
			</section>

			<Shorten />

			<section className='container flex flex-col items-center justify-center text-center space-y-4 pb-14'>
				<h2 className='text-2xl font-bold'>Advanced Statistics</h2>
				<p className='text-sm'>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</section>

			<CardSection flex icon={brandRecognitionIcon}>
				<h3 className='text-xl font-bold'>Brand Recognition</h3>
				<p className='text-sm'>
					Boost your brand recognition with each click. Generic links don’t mean
					a thing. Branded links help instil confidence in your content.
				</p>
			</CardSection>

			<CardSection flex icon={detailedRecordsIcon}>
				<h3 className='text-xl font-bold'>Detailed Records</h3>
				<p className='text-sm'>
					Gain insights into who is clicking your links. Knowing when and where
					people engage with your content helps inform better decisions.
				</p>
			</CardSection>

			<CardSection flex icon={fullyCustomizableIcon}>
				<h3 className='text-xl font-bold'>Fully Customizable</h3>
				<p className='text-sm'>
					Improve brand awareness and content discoverability through
					customizable links, supercharging audience engagement.
				</p>
			</CardSection>

			<section className='container flex flex-col items-center justify-center text-center space-y-4 py-20 bg-[url("/images/bg-boost-mobile.svg")] bg-dark-violet bg-cover'>
				<h2 className='text-2xl text-white'>Boost your links today</h2>
				<Button className='rounded-full px-10 py-6'>Get Started</Button>
			</section>

			<footer className='container flex flex-col items-center justify-center text-center bg-very-dark-violet py-4 space-y-4 text-white'>
				<Logo className='text-white' />
				<div className=''>
					<h4 className='text-sm'>Features</h4>
					<ul className='text-xs text-grey mt-4'>
						<li>Link Shortening</li>
						<li>Branded Links</li>
						<li>Analytics</li>
					</ul>
				</div>
				<div className=''>
					<h4 className='text-sm'>Resources</h4>
					<ul className='text-xs text-grey mt-4'>
						<li>Blog</li>
						<li>Developers</li>
						<li>Support</li>
					</ul>
				</div>
				<div className=''>
					<h4 className='text-sm'>Company</h4>
					<ul className='text-xs text-grey mt-4'>
						<li>About</li>
						<li>Our Team</li>
						<li>Careers</li>
						<li>Contact</li>
					</ul>
				</div>
				<div>
					<ul className='flex gap-4'>
						{socialIcons.map((icons) => (
							<li key={icons.alt}>
								<Image src={icons.src} alt={icons.alt} width={15} height={15} />
							</li>
						))}
					</ul>
				</div>
			</footer>
		</main>
	)
}
