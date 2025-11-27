import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAreas } from '@/routes/dashboard/collections/areas/components/areas-provider'

export default function AreasPrimaryButtons() {
	const { setOpen } = useAreas()

	return (
		<Button onClick={() => setOpen('create')}>
			<span>Create</span> <Plus size={18} />
		</Button>
	)
}
