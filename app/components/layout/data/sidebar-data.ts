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
				// {
				// 	title: 'Cafe',
				// 	to: '/dashboard/collections/cafes',
				// 	icon: Store,
				// 	children: [
				// 		{
				// 			title: 'Cafe List',
				// 			to: '/dashboard/collections/cafes',
				// 			icon: Plus,
				// 		},
				// 		{
				// 			title: 'Tambah Cafe Baru',
				// 			to: '/dashboard/collections/cafes/new',
				// 			icon: Plus,
				// 		},
				// 	],
				// },
				{
					title: 'Kategori',
					to: '/dashboard/collections/categories',
					icon: TagIcon,
					children: [
						{
							title: 'Kategori baru',
							to: '/collections/categories/new',
							icon: Plus,
						},
					],
				},
				{
					title: 'Fasilitias',
					to: '/dashboard/collections/facilities',
					icon: Wifi,
					children: [
						{
							title: 'Fasilitas baru',
							to: '/dashboard/collections/facilities/new',
							icon: Plus,
						},
						{
							title: 'Fasilitas baru',
							to: '/dashboard/collections/facilities/new',
							icon: Plus,
						},
					],
				},
				{
					title: 'Lokasi',
					to: '/collections/lokasi',
					icon: MapIcon,
					children: [
						{
							title: 'Add Lokasi',
							to: '/collections/lokasi/new',
							icon: Plus,
						},
					],
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
