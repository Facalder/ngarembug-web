import type { ColumnDef } from '@tanstack/react-table'
import { Archive, CheckCircle2, Circle } from 'lucide-react'
import { DataTableColumnHeader } from '@/components/data-table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { formatDate, formatRelative } from '@/lib/date'
import DataTableRowActions from '@/routes/dashboard/collections/categories/components/data-table-row-actions'
import type { Category } from '@/schema'

const statusMap: Record<
	string,
	{ label: string; color: string; icon: React.ElementType }
> = {
	draft: {
		label: 'Draft',
		color: 'bg-yellow-500/20 text-yellow-700',
		icon: Circle,
	},
	published: {
		label: 'Published',
		color: 'bg-green-500/20 text-green-700',
		icon: CheckCircle2,
	},
	archived: {
		label: 'Archived',
		color: 'bg-gray-500/20 text-gray-700',
		icon: Archive,
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
		enableSorting: false,
		meta: { minSize: 250, maxSize: 450 },
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Deskripsi" />
		),
		cell: ({ row }) => (
			<span className="text-wrap block max-w-[350px]">
				{row.getValue('description')}
			</span>
		),
	},

	{
		id: 'status',
		accessorKey: 'status',
		size: 160,
		enableSorting: false,
		meta: { minSize: 120, maxSize: 200 },
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Status" />
		),
		cell: ({ row }) => {
			const value = String(row.getValue('status'))
			const item = statusMap[value]

			if (!item) return null

			const Icon = item.icon

			return (
				<Badge className={`${item.color} rounded-md font-medium`}>
					{<Icon className="w-4 h-4" />}
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
		cell: ({ row }) => (
			<span className="text-muted-foreground">
				{formatRelative(row.getValue('updatedAt'))}
			</span>
		),
	},

	{
		id: 'createdAt',
		accessorKey: 'createdAt',
		size: 180,
		meta: { minSize: 150, maxSize: 240 },
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Created At" />
		),
		cell: ({ row }) => (
			<span className="text-muted-foreground">
				{formatDate(row.getValue('createdAt'))}
			</span>
		),
	},

	{
		id: 'action',
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
]
