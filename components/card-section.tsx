import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export interface CardSectionProps {
	children?: React.ReactNode
	flex?: boolean
	className?: string
	icon?: { src: string; alt: string }
	index?: number
}

export function CardSection(props: CardSectionProps) {
	return (
		<div
			className={cn(
				'pb-14 w-full',
				props.flex &&
					'flex flex-col items-center justify-center text-center space-y-4',
				props.icon && 'relative'
			)}
		>
			<Card
				className={cn(
					props.icon && 'shadow-none rounded-sm  md:mb-4 lg:h-[256px]',
					props.index === 0 && 'lg:-translate-y-10',
					props.index === 1 && '',
					props.index === 2 && 'lg:translate-y-20'
				)}
			>
				{props.icon && (
					<>
						<CardHeader className='absolute p-4 -top-4 left-1/2 bg-dark-violet rounded-full z-20 -translate-y-4 -translate-x-1/2 lg:-translate-x-28'>
							<Image
								className=''
								src={props.icon.src}
								alt={props.icon.alt}
								width={35}
								height={35}
							/>
						</CardHeader>
						<line
							className={cn(
								'absolute h-20 w-2 bg-primary -top-[73px] z-10 -translate-x-1 lg:top-1/2 lg:rotate-90 lg:left-0 lg:lg:h-[18px] lg:-translate-y-[200%] lg:-translate-x-3',
								props.index === 0 && 'hidden'
							)}
						/>
					</>
				)}
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
		</div>
	)
}
