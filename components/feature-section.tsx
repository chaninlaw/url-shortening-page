import { features } from '@/data/features'
import { Container } from '@/components/container'
import { For } from '@/components/for'
import { AdvancedStatistics } from '@/components/advance-statistic'
import { CardSection } from './card-section'

export function FeaturesSection() {
	return (
		<section className='relative after:w-[100vw] after:absolute after:-left-[0.5%] after:bg-accent-foreground  after:inset-0 after:-z-10 lg:py-10 lg:after:-left-[6%] xl:after:-left-[3%]'>
			<AdvancedStatistics />
			<Container as='div' className='lg:grid lg:grid-cols-3 lg:gap-4 lg:py-10'>
				<For each={features}>
					{(feature, index) => (
						<CardSection
							flex
							key={feature.id}
							icon={feature.icon}
							index={index}
						>
							<h3 className='text-xl font-bold'>{feature.title}</h3>
							<p className='text-sm'>{feature.paragraph}</p>
						</CardSection>
					)}
				</For>
			</Container>
		</section>
	)
}
