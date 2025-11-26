import React from 'react'
import useDialogState from '@/hooks/use-dialog'
import type { Facility } from '@/schema'

type FacilitiesDialogType = 'create' | 'update' | 'delete'

type FacilitiesContextType = {
	open: FacilitiesDialogType | null
	setOpen: (str: FacilitiesDialogType | null) => void
	currentRow: Facility | null
	setCurrentRow: React.Dispatch<React.SetStateAction<Facility | null>>
}

const FacilitiesContext = React.createContext<FacilitiesContextType | null>(
	null,
)

export default function FacilitiesProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [open, setOpen] = useDialogState<FacilitiesDialogType>(null)
	const [currentRow, setCurrentRow] = React.useState<Facility | null>(null)

	return (
		<FacilitiesContext value={{ open, setOpen, currentRow, setCurrentRow }}>
			{children}
		</FacilitiesContext>
	)
}

export const useFacilities = () => {
	const categoryContext = React.useContext(FacilitiesContext)

	if (!categoryContext) {
		throw new Error('useFacilities has to be used within <FacilitiesContext>')
	}

	return categoryContext
}
