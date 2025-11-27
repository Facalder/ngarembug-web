import FacilitiesMutateDrawer from '@/routes/dashboard/collections/facilities/components/facilities-mutate-drawer'
import { useFacilities } from '@/routes/dashboard/collections/facilities/components/facilities-provider'

export default function FacilitiesDialogs() {
	const { open, setOpen, currentRow, setCurrentRow } = useFacilities()

	return (
		<>
			<FacilitiesMutateDrawer
				key="facility-create"
				open={open === 'create'}
				onOpenChange={() => setOpen('create')}
			/>

			{currentRow && (
				<FacilitiesMutateDrawer
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
