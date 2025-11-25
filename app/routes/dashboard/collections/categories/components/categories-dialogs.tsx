import CategoriesMutateDrawer from '@/routes/dashboard/collections/categories/components/categories-mutate-drawer'
import { useCategories } from '@/routes/dashboard/collections/categories/components/categories-provider'

export default function CategoriesDialogs() {
	const { open, setOpen, currentRow, setCurrentRow } = useCategories()

	return (
		<>
			<CategoriesMutateDrawer
				key="category-create"
				open={open === 'create'}
				onOpenChange={() => setOpen('create')}
			/>

			{currentRow && (
				<CategoriesMutateDrawer
					key={`task-update-${currentRow.name}`}
					open={open === 'update'}
					onOpenChange={() => {
						setOpen('update')
						setTimeout(() => {
							setCurrentRow(null)
						}, 500)
					}}
					currentRow={currentRow}
				/>
			)}
		</>
	)
}
