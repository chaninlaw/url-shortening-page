import { HeroSection } from '@/components/hero-section'
import { ShortenSection } from '@/components/shorten-section'
import { FeaturesSection } from '@/components/feature-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
	return (
		<main className='relative overflow-hidden text-more-dark-violet md:px-10'>
			<HeroSection />
			<ShortenSection />
			<FeaturesSection />
			<CTASection />
			<Footer />
		</main>
	)
}
