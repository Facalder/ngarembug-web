import AreasDialogs from '@/routes/dashboard/collections/areas/components/areas-dialogs'
import AreasPrimaryButtons from '@/routes/dashboard/collections/areas/components/areas-primary-button'
import AreasProvider from '@/routes/dashboard/collections/areas/components/areas-provider'
import AreasTable from '@/routes/dashboard/collections/areas/components/areas-table'
import { areasData } from '@/routes/dashboard/collections/areas/data/areas-data'

export default function AreasPage() {
	return (
		<AreasProvider>
			<div className="mb-4 flex items-center justify-between flex-wrap gap-4">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold">Area Kafe</h1>
					<p className="text-muted-foreground">Daftar area kafe</p>
				</div>

				<AreasPrimaryButtons />
			</div>
			<AreasTable data={areasData} />
			<AreasDialogs />
		</AreasProvider>
	)
}
