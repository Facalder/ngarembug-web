type User = {
	name: string
	email: string
	avatar: string
}

type NavItems = {
	title: string
	to?: string
	badge?: number
	icon?: React.ElementType
	children?: NavItems[]
}

type NavGroups = {
	title: string
	items: NavItems[]
}

type SidebarData = {
	navGroups: NavGroups[]
	navFooter?: NavItems[]
}

export type { SidebarData, NavGroups, NavItems, User }
