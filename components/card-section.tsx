import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface CardSectionProps {
	children?: React.ReactNode
	flex?: boolean
	className?: string
	icon?: { src: string; alt: string }
}

export default function CardSection(props: CardSectionProps) {
	return (
		<section
			className={cn(
				'container pb-14',
				props.flex &&
					'flex flex-col items-center justify-center text-center space-y-4',
				props.icon && 'relative pt-14 bg-accent-foreground'
			)}
		>
			{props.icon && (
				<div className='absolute top-0 bg-dark-violet p-4 rounded-full translate-y-1/2'>
					<Image
						src={props.icon.src}
						alt={props.icon.alt}
						width={35}
						height={35}
					/>
				</div>
			)}
			<Card className={cn(props.icon && 'shadow-none')}>
				<CardContent
					className={cn(
						'py-4 space-y-6',
						props.className,
						props.icon && 'pt-16 pb-10'
					)}
				>
					{props.children}
				</CardContent>
			</Card>
		</section>
	)
}
