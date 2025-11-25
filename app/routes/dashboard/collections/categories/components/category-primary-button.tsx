import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCategories } from '@/routes/dashboard/collections/categories/components/categories-provider'

export default function CategoryPrimaryButtons() {
	const { setOpen } = useCategories()

	return (
		<Button onClick={() => setOpen('create')}>
			<span>Create</span> <Plus size={18} />
		</Button>
	)
}
