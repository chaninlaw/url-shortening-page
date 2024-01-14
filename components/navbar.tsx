'use client'

import Link from 'next/link'
import { Logo } from '@/components/logo'
import { DividerHorizontalIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { For } from './for'
import { leftNavItems, rightNavItems } from '@/data/nav'
import { AnimationProps, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function Navbar() {
	const menuRef = useRef<HTMLDivElement | null>(null)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		document.addEventListener('mousedown', toggleMenu)

		return () => {
			document.removeEventListener('mousedown', (e) => {})
		}
	}, [])

	const toggleMenu = (e: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(e.target as HTMLElement)) {
			setIsOpen(false)
		} else {
			setIsOpen(!isOpen)
		}
	}
	const onOpen = () => {
		setIsOpen(true)
	}

	const onClose = () => {
		setIsOpen(false)
	}

	const menuVariants: AnimationProps['variants'] = {
		open: {
			opacity: 1,
			x: 0,
			transition: { type: 'spring', stiffness: 50 },
		},
		closed: {
			opacity: 0,
			x: '100%',
			transition: { type: 'spring', stiffness: 50 },
		},
	}

	return (
		<header className='md:px-10'>
			<nav className='p-4 flex justify-between items-center'>
				<div className='flex gap-4'>
					<Link href='/'>
						<Logo image />
					</Link>
					<div className='hidden sm:flex items-center justify-center gap-4 text-sm text-grey'>
						<For each={leftNavItems}>
							{(item) => (
								<Link key={item.title} href={item.href}>
									{item.title}
								</Link>
							)}
						</For>
					</div>
				</div>

				<div className='hidden sm:flex items-center justify-center gap-4 text-sm text-grey'>
					<For each={rightNavItems}>
						{(item) =>
							item.title === 'Sign Up' ? (
								<Link href={item.href}>
									<Button className='rounded-full'>{item.title}</Button>
								</Link>
							) : (
								<Link key={item.title} href={item.href}>
									{item.title}
								</Link>
							)
						}
					</For>
				</div>

				<HamburgerMenuIcon
					className='h-6 w-6 cursor-pointer sm:hidden'
					onClick={onOpen}
				/>
				<motion.div
					ref={menuRef}
					className={cn(
						'absolute inset-0 m-4 py-8 h-fit flex flex-col justify-center items-center rounded-md z-20 bg-dark-violet text-white sm:hidden',
						!isOpen && 'hidden'
					)}
					initial='closed'
					animate={isOpen ? 'open' : 'closed'}
					variants={menuVariants}
				>
					<svg
						width='15'
						height='15'
						viewBox='0 0 15 15'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute top-4 right-4 text-white'
						onClick={onClose}
					>
						<path
							d='M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z'
							fill='currentColor'
							fillRule='evenodd'
							clipRule='evenodd'
						></path>
					</svg>
					<ul className='text-center space-y-4'>
						<For each={leftNavItems}>
							{(item) => (
								<li key={item.title}>
									<Link href={item.href}>{item.title}</Link>
								</li>
							)}
						</For>
					</ul>
					<line className='w-10/12 h-[0.5px] bg-grey my-4' />
					<ul className='text-center space-y-4'>
						<For each={rightNavItems}>
							{(item) =>
								item.title === 'Sign Up' ? (
									<li key={item.title}>
										<Link href={item.href}>
											<Button className='rounded-full'>{item.title}</Button>
										</Link>
									</li>
								) : (
									<li key={item.title}>
										<Link key={item.title} href={item.href}>
											{item.title}
										</Link>
									</li>
								)
							}
						</For>
					</ul>
				</motion.div>
			</nav>
		</header>
	)
}
