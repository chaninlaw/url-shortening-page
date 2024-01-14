'use client'

import Link from 'next/link'
import { Logo } from '@/components/logo'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

export function Navbar() {
	return (
		<header className='md:px-10'>
			<nav className='p-4 flex justify-between items-center'>
				<div className='flex gap-4'>
					<Link href='/'>
						<Logo image />
					</Link>
					<div className='hidden sm:flex items-center justify-center gap-4 text-sm text-grey'>
						<Link href='#'>Features</Link>
						<Link href='#'>Pricing</Link>
						<Link href='#'>Resources</Link>
					</div>
				</div>

				<div className='hidden sm:flex items-center justify-center gap-4 text-sm text-grey'>
					<Link href='#'>Login</Link>
					<Link href='#'>
						<Button className='rounded-full'>Sign Up</Button>
					</Link>
				</div>

				<HamburgerMenuIcon className='h-6 w-6 sm:hidden' />
			</nav>
		</header>
	)
}
