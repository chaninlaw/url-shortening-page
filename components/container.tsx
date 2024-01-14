import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

interface ContainerProps {
	className?: string
	children?: React.ReactNode
	as?: 'section' | 'div' | 'footer'
}
export function Container(props: ContainerProps) {
	const Comp = props.as || Slot
	return (
		<Comp
			className={cn(
				'container flex flex-col items-center justify-center text-center space-y-4 md:space-y-0',
				props.className
			)}
		>
			{props.children}
		</Comp>
	)
}
