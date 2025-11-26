import {
	flexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable,
	type VisibilityState,
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { DataTablePagination, DataTableToolbar } from '@/components/data-table'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { useTableUrlState } from '@/hooks/use-table-url'
import { cn } from '@/lib/utils'
// import { DataTableBulkActions } from './data-table-bulk-actions'
import { categoriesColumns as columns } from '@/routes/dashboard/collections/categories/components/categories-columns'
import type { Category } from '@/schema'
import { statuses } from '../../../data/filter-data'

type DataTableProps = {
	data: Category[]
}

export function CategoriesTable({ data }: DataTableProps) {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()

	// Local UI-only states
	const [rowSelection, setRowSelection] = useState({})
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

	// Local state management for table (uncomment to use local-only state, not synced with URL)
	// const [globalFilter, onGlobalFilterChange] = useState('')
	// const [columnFilters, onColumnFiltersChange] = useState<ColumnFiltersState>([])
	// const [pagination, onPaginationChange] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })

	// Convert searchParams to search object for useTableUrlState
	const search = Object.fromEntries(searchParams.entries())

	// Synced with URL states (updated to match route search schema defaults)
	const {
		globalFilter,
		onGlobalFilterChange,
		columnFilters,
		onColumnFiltersChange,
		pagination,
		onPaginationChange,
		ensurePageInRange,
	} = useTableUrlState({
		search,
		navigate,
		pagination: { defaultPage: 1, defaultPageSize: 10 },
		globalFilter: { enabled: true, key: 'filter' },
		columnFilters: [
			{ columnId: 'status', searchKey: 'status', type: 'array' },
			{ columnId: 'name', searchKey: 'name', type: 'string' },
		],
	})

	// eslint-disable-next-line react-hooks/incompatible-library
	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			columnVisibility,
			rowSelection,
			columnFilters,
			globalFilter,
			pagination,
		},
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		onColumnVisibilityChange: setColumnVisibility,
		globalFilterFn: (row, _columnId, filterValue) => {
			const id = String(row.getValue('id')).toLowerCase()
			const title = String(row.getValue('title')).toLowerCase()
			const searchValue = String(filterValue).toLowerCase()

			return id.includes(searchValue) || title.includes(searchValue)
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		onPaginationChange,
		onGlobalFilterChange,
		onColumnFiltersChange,
	})

	const pageCount = table.getPageCount()
	useEffect(() => {
		ensurePageInRange(pageCount)
	}, [pageCount, ensurePageInRange])

	return (
		<div
			className={cn(
				'max-sm:has-[div[role="toolbar"]]:mb-16',
				'flex flex-1 flex-col gap-4',
			)}
		>
			<DataTableToolbar
				table={table}
				searchPlaceholder="Filter by title or ID..."
				filters={[
					{
						columnId: 'status',
						title: 'Status',
						options: statuses,
					},
				]}
			/>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>

					<TableBody>
						{table.getRowModel().rows.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			<DataTablePagination table={table} className="mt-auto" />
			{/* <DataTableBulkActions table={table} /> */}
		</div>
	)
}
