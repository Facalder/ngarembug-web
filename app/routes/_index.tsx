import CafeAreasCard from '@/components/cafe-areas-card'
import CafeCard from '@/components/cafe-card'
import CafeCategoriesCard from '@/components/cafe-categories-card'
import type { Route } from './+types/_index'

export function meta(_args: Route.MetaArgs) {
	return [
		{ title: 'New React Router App' },
		{ name: 'description', content: 'Welcome to React Router!' },
	]
}

export default function Home() {
	return (
		<>
			<section
				id="cafe-categories-recommendation-section"
				className="space-y-5 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
			>
				<h2 className="font-bricolage font-bold text-3xl">
					Belom ada ide? Mulai dari sini aja dulu
				</h2>

				<div className="gap-4 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6">
					<CafeCategoriesCard />
					<CafeCategoriesCard />
					<CafeCategoriesCard />
					<CafeCategoriesCard />
					<CafeCategoriesCard />
					<CafeCategoriesCard />
				</div>
			</section>

			<section
				id="whats-on-trending-section"
				className="space-y-5 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
			>
				<div className="space-y-2.5">
					<h2 className="font-bricolage font-bold text-3xl">
						What's on trending di Batununggal
					</h2>
					<p className="text-muted-foreground">
						Yuk, dicek koleksi cafe terpopuler, favoritnya mahasiswa Tel-U!
					</p>
				</div>

				<div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
					<CafeCard />
					<CafeCard />
					<CafeCard />
				</div>
			</section>

			<section
				id="most-love-by-student-section"
				className="space-y-5 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
			>
				<div className="space-y-2.5">
					<h2 className="font-bricolage font-bold text-3xl">
						Disukai banget nih sama mahasiswa
					</h2>
					<p className="text-muted-foreground">
						Biasanya sih mahasiswa Tel-U sukanya rapat disini{' '}
					</p>
				</div>

				<div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
					<CafeCard />
					<CafeCard />
					<CafeCard />
				</div>
			</section>

			<section
				id="cafe-areas-section"
				className="space-y-5 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
			>
				<h2 className="font-bricolage font-bold text-3xl">
					Belom ada ide? Mulai dari sini aja dulu
				</h2>

				<div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
					<CafeAreasCard />
					<CafeAreasCard />
					<CafeAreasCard />
					<CafeAreasCard />
					<CafeAreasCard />
					<CafeAreasCard />
					<CafeAreasCard />
					<CafeAreasCard />
				</div>
			</section>
		</>
	)
}
