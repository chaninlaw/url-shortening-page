import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Shortly URL shortening',
	description: 'Frontend Mentor - URL shortening API Challenge',
	icons: '/images/favicon-32x32.png',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={cn('text-lg', poppins.className)}>
				<Navbar />
				{children}
				<Toaster />
			</body>
		</html>
	)
}
