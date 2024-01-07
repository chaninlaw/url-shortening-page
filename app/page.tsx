import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { heroImage, socialIcons } from '@/data/images'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='space-y-14'>
			<section className='relative h-full overflow-hidden'>
				<Image
					className='relative'
					src={heroImage.src}
					alt={heroImage.alt}
					width={500}
					height={700}
				/>
			</section>

			<section className='container flex flex-col items-center justify-center text-center space-y-4'>
				<h1 className='text-3xl font-bold'>More than just shorter links</h1>
				<p>
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<Button className='rounded-full px-10 py-6'>Get Started</Button>
			</section>

			<section className='container'>
				<Card>
					<CardContent className='py-4 space-y-6'>
						<Input placeholder='Shorten a link here...' />
						<Button className='w-full'>Shorten It!</Button>
					</CardContent>
				</Card>
			</section>

			<section className='container flex flex-col items-center justify-center text-center space-y-4'>
				<h2 className='text-2xl font-bold'>Advanced Statistics</h2>
				<p className='text-sm'>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</section>

			<section className='container flex flex-col items-center justify-center text-center space-y-4'>
				<Card>
					<CardContent className='py-4 space-y-6'>
						<h3 className='text-xl font-bold'>Brand Recognition</h3>
						<p className='text-sm'>
							Boost your brand recognition with each click. Generic links don’t
							mean a thing. Branded links help instil confidence in your
							content.
						</p>
					</CardContent>
				</Card>
			</section>

			<section className='container flex flex-col items-center justify-center text-center space-y-4'>
				<Card>
					<CardContent className='py-4 space-y-6'>
						<h3 className='text-xl font-bold'>Detailed Records</h3>
						<p className='text-sm'>
							Gain insights into who is clicking your links. Knowing when and
							where people engage with your content helps inform better
							decisions.
						</p>
					</CardContent>
				</Card>
			</section>

			<section className='container flex flex-col items-center justify-center text-center space-y-4'>
				<Card>
					<CardContent className='py-4 space-y-6'>
						<h3 className='text-xl font-bold'>Fully Customizable</h3>
						<p className='text-sm'>
							Improve brand awareness and content discoverability through
							customizable links, supercharging audience engagement.
						</p>
					</CardContent>
				</Card>
			</section>

			<section className='container flex flex-col items-center justify-center text-center space-y-4 py-20 bg-violet-500'>
				<h2>Boost your links today</h2>
				<Button className='rounded-full px-10 py-6'>Get Started</Button>
			</section>

			<footer className='container flex flex-col items-center justify-center text-center bg-slate-500 py-4 space-y-4'>
				<Logo />
				<div className=''>
					<h4>Features</h4>
					<ul className='text-xs'>
						<li>Link Shortening</li>
						<li>Branded Links</li>
						<li>Analytics</li>
					</ul>
				</div>
				<div className=''>
					<h4>Resources</h4>
					<ul className='text-xs'>
						<li>Blog</li>
						<li>Developers</li>
						<li>Support</li>
					</ul>
				</div>
				<div className=''>
					<h4>Company</h4>
					<ul className='text-xs'>
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
