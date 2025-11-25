import React from 'react'
import useDialogState from '@/hooks/use-dialog'
import type { Category } from '@/schema'

type CategoriesDialogType = 'create' | 'update' | 'delete'

type CategoriesContextType = {
	open: CategoriesDialogType | null
	setOpen: (str: CategoriesDialogType | null) => void
	currentRow: Category | null
	setCurrentRow: React.Dispatch<React.SetStateAction<Category | null>>
}

const CategoriesContext = React.createContext<CategoriesContextType | null>(
	null,
)

export function CategoriesProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [open, setOpen] = useDialogState<CategoriesDialogType>(null)
	const [currentRow, setCurrentRow] = React.useState<Category | null>(null)

	return (
		<CategoriesContext value={{ open, setOpen, currentRow, setCurrentRow }}>
			{children}
		</CategoriesContext>
	)
}

export const useCategories = () => {
	const categoryContext = React.useContext(CategoriesContext)

	if (!categoryContext) {
		throw new Error('useCategories has to be used within <CategoriesContext>')
	}

	return categoryContext
}
