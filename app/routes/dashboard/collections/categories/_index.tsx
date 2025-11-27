import CategoriesDialogs from '@/routes/dashboard/collections/categories/components/categories-dialogs'
import CategoriesProvider from '@/routes/dashboard/collections/categories/components/categories-provider'
import CategoriesTable from '@/routes/dashboard/collections/categories/components/categories-table'
import CategoryPrimaryButtons from '@/routes/dashboard/collections/categories/components/category-primary-button'
import { categoriesData } from '@/routes/dashboard/collections/categories/data/categories-data'

export default function CategoriesPage() {
	return (
		<CategoriesProvider>
			<div className="mb-4 flex items-center justify-between flex-wrap gap-4">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold">Kategori Kafe</h1>
					<p className="text-muted-foreground">Daftar kategori kafe</p>
				</div>

				<CategoryPrimaryButtons />
			</div>

			<CategoriesTable data={categoriesData} />
			<CategoriesDialogs />
		</CategoriesProvider>
	)
}
