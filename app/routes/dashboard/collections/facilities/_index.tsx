import FacilitiesDialogs from '@/routes/dashboard/collections/facilities/components/facilities-dialogs'
import FacilitiesPrimaryButtons from '@/routes/dashboard/collections/facilities/components/facilities-primary-button'
import { FacilitiesProvider } from '@/routes/dashboard/collections/facilities/components/facilities-provider'
import { FacilitiesTable } from '@/routes/dashboard/collections/facilities/components/facilities-table'
import { facilitiesData } from '@/routes/dashboard/collections/facilities/data/facilities'

export default function FacilitiesPage() {
	return (
		<FacilitiesProvider>
			<div className="mb-4 flex items-center justify-between flex-wrap gap-4">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold">Fasilitas Kafe</h1>
					<p className="text-muted-foreground">
						Fasilitas pada sebuah kafe
					</p>
				</div>

				<FacilitiesPrimaryButtons />
			</div>
			<FacilitiesTable data={facilitiesData} />
			<FacilitiesDialogs />
		</FacilitiesProvider>
	)
}
