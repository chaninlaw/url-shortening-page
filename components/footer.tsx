import { footer } from '@/data/footer'
import { socialIcons } from '@/data/images'
import { Container } from '@/components/container'
import { FooterLinks } from '@/components/footer-link'
import { For } from '@/components/for'
import { Logo } from '@/components/logo'
import Image from 'next/image'

export function Footer() {
	return (
		<Container
			as='footer'
			className='text-white bg-super-dark-violet py-4 w-[100vw] md:-translate-x-[5.22%] md:py-10 lg:px-20'
		>
			<div className='md:w-full md:flex md:justify-between'>
				<Logo className='text-white md:w-fit' />
				<div className='md:flex md:justify-start md:space-x-10 lg:pl-24'>
					<For each={footer.links}>
						{(heading) => (
							<div className='md:text-start'>
								<h4 className='text-sm'>{heading.title}</h4>
								<ul className='text-xs text-light-grey mt-4 space-y-1'>
									<For each={heading.links}>
										{(link) => <FooterLinks key={link.title} {...link} />}
									</For>
								</ul>
							</div>
						)}
					</For>
				</div>
				<ul className='flex gap-4 mt-4 md:mt-0'>
					<For each={socialIcons}>
						{(icon) => (
							<li key={icon.alt}>
								<Image
									className='text-light-grey'
									src={icon.src}
									alt={icon.alt}
									width={20}
									height={20}
								/>
							</li>
						)}
					</For>
				</ul>
			</div>
		</Container>
	)
}
