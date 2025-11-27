import type { Row } from '@tanstack/react-table'
import { Ellipsis, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useCategories } from '@/routes/dashboard/collections/categories/components/categories-provider'
import { categorySchema } from '@/schema/zod/categoriesSchema'

type DataTableRowActionsProps<TData> = {
	row: Row<TData>
}

export default function DataTableRowActions<TData>({
	row,
}: DataTableRowActionsProps<TData>) {
	const category = categorySchema.parse(row.original)

	const { setOpen, setCurrentRow } = useCategories()

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
				>
					<Ellipsis className="h-4 w-4" />
					<span className="sr-only">Open menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-40">
				<DropdownMenuItem
					onClick={() => {
						setCurrentRow(category)
						setOpen('update')
					}}
				>
					Edit
				</DropdownMenuItem>
				<DropdownMenuItem
					variant="destructive"
					onClick={() => {
						setCurrentRow(category)
						setOpen('delete')
					}}
				>
					Delete
					<DropdownMenuShortcut>
						<Trash2 size={16} className="text-destructive" />
					</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
