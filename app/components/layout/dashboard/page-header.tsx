'use client'

import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'

interface PageHeaderProps {
	title: string
	description?: string
	entries?: number
	createLink?: string
	createLabel?: string
}

export default function PageHeader({
	title,
	description,
	entries,
	createLink,
	createLabel = 'Create new entry',
}: PageHeaderProps) {
	const navigate = useNavigate()

	return (
		<div className="mb-2">
			<div className="flex items-center justify-between mb-4">
				<div className="flex flex-col items-center gap-4">
					<div className="space-y-1">
						<h1 className="text-3xl font-semibold text-white">{title}</h1>
						{entries !== undefined && (
							<p className="text-sm text-muted-foreground">
								{entries} entries found
							</p>
						)}
						{description && (
							<p className="text-sm text-muted-foreground">{description}</p>
						)}
					</div>
				</div>

				{createLink && (
					<Button onClick={() => navigate(createLink)}>
						<Plus className="size-4" />
						{createLabel}
					</Button>
				)}
			</div>
		</div>
	)
}
