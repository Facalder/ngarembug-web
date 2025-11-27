import React from 'react'
import useDialogState from '@/hooks/use-dialog'
import type { Area } from '@/schema'

type AreasDialogType = 'create' | 'update' | 'delete'

type AreasContextType = {
	open: AreasDialogType | null
	setOpen: (str: AreasDialogType | null) => void
	currentRow: Area | null
	setCurrentRow: React.Dispatch<React.SetStateAction<Area | null>>
}

const AreasContext = React.createContext<AreasContextType | null>(null)

export default function AreasProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [open, setOpen] = useDialogState<AreasDialogType>(null)
	const [currentRow, setCurrentRow] = React.useState<Area | null>(null)

	return (
		<AreasContext value={{ open, setOpen, currentRow, setCurrentRow }}>
			{children}
		</AreasContext>
	)
}

export const useAreas = () => {
	const categoryContext = React.useContext(AreasContext)

	if (!categoryContext) {
		throw new Error('useAreas has to be used within <AreasContext>')
	}

	return categoryContext
}
