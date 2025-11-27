import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useFacilities } from '@/routes/dashboard/collections/facilities/components/facilities-provider'

export default function FacilitiesPrimaryButtons() {
	const { setOpen } = useFacilities()

	return (
		<Button onClick={() => setOpen('create')}>
			<span>Create</span> <Plus size={18} />
		</Button>
	)
}
