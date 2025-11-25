import PageHeader from '@/components/layout/dashboard/page-header'

export default function CategoriesPage() {
	return (
		<>
			<PageHeader
				title="Categories"
				entries={9}
				createLink="/dashboard/collections/categories/new"
			/>

			<h2>Hello</h2>
		</>
	)
}
