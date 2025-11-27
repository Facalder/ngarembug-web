import type { Column } from '@tanstack/react-table'
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeClosed } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

type DataTableColumnHeaderProps<TData, TValue> =
	React.HTMLAttributes<HTMLDivElement> & {
		column: Column<TData, TValue>
		title: string
	}

export function DataTableColumnHeader<TData, TValue>({
	column,
	title,
	className,
}: DataTableColumnHeaderProps<TData, TValue>) {
	if (!column.getCanSort()) {
		return <div className={cn(className)}>{title}</div>
	}

	return (
		<div className={cn('flex items-center space-x-2', className)}>
			<span className="mr-2">{title}</span>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						size="icon-sm"
						className="data-[state=open]:bg-secondary h-8"
					>
						{column.getIsSorted() === 'desc' ? (
							<ArrowDown className="h-4 w-4" />
						) : column.getIsSorted() === 'asc' ? (
							<ArrowUp className="h-4 w-4" />
						) : (
							<ChevronsUpDown className="h-4 w-4" />
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					<DropdownMenuItem onClick={() => column.toggleSorting(false)}>
						<ArrowUp className="text-muted-foreground/70 size-3.5" />
						Asc
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => column.toggleSorting(true)}>
						<ArrowDown className="text-muted-foreground/70 size-3.5" />
						Desc
					</DropdownMenuItem>
					{column.getCanHide() && (
						<>
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
								<EyeClosed className="text-muted-foreground/70 size-3.5" />
								Hide
							</DropdownMenuItem>
						</>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
