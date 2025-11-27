type User = {
	name: string
	email: string
	image: string
}

type NavbarItems = {
	title: string
	to?: string
	icon?: React.ElementType
	children?: NavbarItems[]
}

export type { User, NavbarItems }
