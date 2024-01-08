'use client'

import Link from 'next/link'
import { Logo } from './logo'
import { useWindowSize } from 'usehooks-ts'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export function Navbar() {
	const { width } = useWindowSize()
	const isMobile = width <= 375
	return (
		<header className=''>
			<nav className='p-4 flex justify-between items-center'>
				<div className='flex gap-4'>
					<Link href='/'>
						<Logo image />
					</Link>
					{!isMobile && (
						<>
							<Link href='#'>Features</Link>
							<Link href='#'>Pricing</Link>
							<Link href='#'>Resources</Link>
						</>
					)}
				</div>

				<div className='flex gap-4'>
					{!isMobile && (
						<>
							<Link href='#'>Login</Link>
							<Link href='#'>Sign Up</Link>
						</>
					)}
					{isMobile && <HamburgerMenuIcon className='h-6 w-6' />}
				</div>
			</nav>
		</header>
	)
}
