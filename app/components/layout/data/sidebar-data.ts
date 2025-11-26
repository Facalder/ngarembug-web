import {
	Blocks,
	Home,
	Inbox,
	MapIcon,
	Plus,
	Search,
	TagIcon,
	Wifi,
} from 'lucide-react'
import type {
	NavItems,
	SidebarData,
	User,
} from '@/components/layout/types/sidebar-type'

export const user: User = {
	name: 'Najla',
	email: 'najlaaisy@gmail.com',
	avatar: '',
}

export const sidebarDataNavMain: NavItems[] = [
	{
		title: 'Home',
		to: '/dashboard',
		icon: Home,
	},

	{
		title: 'Search',
		icon: Search,
	},

	{
		title: 'Notifications',
		icon: Inbox,
		badge: 5,
	},
]

export const sidebarDataNavGroups: SidebarData = {
	navGroups: [
		{
			title: 'Collections',
			items: [
				{
					title: 'Kategori',
					to: '/dashboard/collections/categories',
					icon: TagIcon,
				},
				{
					title: 'Fasilitias',
					to: '/dashboard/collections/facilities',
					icon: Wifi,
				},
				{
					title: 'Lokasi',
					to: '/collections/lokasi',
					icon: MapIcon,
				},
				{
					title: 'Tipe Cafe',
					to: '/collections/tipe-cafe',
					icon: Blocks,
				},
			],
		},
	],
}
