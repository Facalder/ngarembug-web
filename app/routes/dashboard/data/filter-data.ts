import { Archive, Check, History } from 'lucide-react'

export const statuses = [
	{
		label: 'Draft',
		value: 'draft' as const,
		icon: History,
	},
	{
		label: 'Published',
		value: 'published' as const,
		icon: Check,
	},
	{
		label: 'Archived',
		value: 'archived' as const,
		icon: Archive,
	},
]
