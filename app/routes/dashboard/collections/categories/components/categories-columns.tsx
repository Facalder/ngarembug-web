import type { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '@/components/data-table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import DataTableRowActions from '@/routes/dashboard/collections/categories/components/data-table-row-actions'
import type { Category } from '@/schema'

// STATUS BADGE MAPPING
const statusMap: Record<string, { label: string; color: string }> = {
	draft: { label: 'Draft', color: 'bg-yellow-500/20 text-yellow-600' },
	published: { label: 'Published', color: 'bg-green-500/20 text-green-600' },
	archived: {
		label: 'Archived',
		color: 'bg-stone-500/20 text-muted-foreground',
	},
}

export const categoriesColumns: ColumnDef<Category>[] = [
	{
		id: 'select',
		size: 40,
		enableResizing: false,
		enableSorting: false,
		enableHiding: false,
		meta: { minSize: 40, maxSize: 40 },
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomeRowsSelected() && 'indeterminate')
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
	},
	{
		id: 'id',
		accessorKey: 'id',
		size: 140,
		enableSorting: false,
		enableHiding: false,
		meta: { minSize: 100, maxSize: 200 },
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="ID" />
		),
		cell: ({ row }) => (
			<span className="truncate block max-w-[140px]">{row.getValue('id')}</span>
		),
	},
	{
		id: 'name',
		accessorKey: 'name',
		size: 200,
		meta: { minSize: 150, maxSize: 260 },
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Nama Kategori" />
		),
		cell: ({ row }) => (
			<span className="truncate block max-w-[200px]">
				{row.getValue('name')}
			</span>
		),
	},

	{
		id: 'description',
		accessorKey: 'description',
		size: 350,
		meta: { minSize: 250, maxSize: 450 },
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Deskripsi" />
		),
		cell: ({ row }) => (
			<span className="truncate block max-w-[350px]">
				{row.getValue('description')}
			</span>
		),
	},

	{
		id: 'status',
		accessorKey: 'status',
		size: 160,
		meta: { minSize: 120, maxSize: 200 },
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Status" />
		),
		cell: ({ row }) => {
			const value = String(row.getValue('status'))
			const item = statusMap[value]

			if (!item) return null

			return (
				<Badge className={`${item.color} rounded-md font-medium`}>
					{item.label}
				</Badge>
			)
		},
	},

	{
		id: 'updatedAt',
		accessorKey: 'updatedAt',
		size: 180,
		meta: { minSize: 150, maxSize: 240 },
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Updated At" />
		),
		cell: ({ row }) => row.getValue('updatedAt'),
	},

	{
		id: 'createdAt',
		accessorKey: 'createdAt',
		size: 180,
		meta: { minSize: 150, maxSize: 240 },
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Created At" />
		),
		cell: ({ row }) => row.getValue('createdAt'),
	},

	{
		id: 'action',
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
]
