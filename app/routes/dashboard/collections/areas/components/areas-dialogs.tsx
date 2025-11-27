import AreasMutateDrawer from '@/routes/dashboard/collections/areas/components/areas-mutate-drawer'
import { useAreas } from '@/routes/dashboard/collections/areas/components/areas-provider'

export default function AreasDialogs() {
	const { open, setOpen, currentRow, setCurrentRow } = useAreas()

	return (
		<>
			<AreasMutateDrawer
				key="area-create"
				open={open === 'create'}
				onOpenChange={() => setOpen('create')}
			/>

			{currentRow && (
				<AreasMutateDrawer
					key={`task-update-${currentRow.city}`}
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
