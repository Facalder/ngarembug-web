import CafeCategoriesCard from '@/components/cafe-categories-card'

export default function CafeCategoriesSection() {
	return (
		<section className="mx-auto px-4 sm:px-6 lg:px-8 container">
			<div className="space-y-5">
				<h2 className="font-bricolage font-bold text-3xl">
					Belom ada ide? Mulai dari sini aja dulu
				</h2>

				<CafeCategoriesCard />
			</div>
		</section>
	)
}
