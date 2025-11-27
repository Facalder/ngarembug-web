import {
	Bolt,
	HeartHandshake,
	Home,
	Inbox,
	LocateFixed,
	MapPinHouse,
	Search,
	Settings,
	Sofa,
	Star,
	Store,
	TagIcon,
	UserStar,
	Users,
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
			title: 'Data Kafe',
			items: [
				{
					title: 'Kafe',
					to: '/dashboard/collections/cafes',
					icon: Store,
				},
				{
					title: 'Area Kafe',
					to: '/dashboard/collections/areas',
					icon: LocateFixed,
				},
				{
					title: 'Alamat Kafe',
					to: '/dashboard/collections/addresses',
					icon: MapPinHouse,
				},
				{
					title: 'Kategori',
					to: '/dashboard/collections/categories',
					icon: TagIcon,
				},
				{
					title: 'Fasilitas',
					to: '/dashboard/collections/facilities',
					icon: Sofa,
				},
				{
					title: 'Syarat dan Ketentuan',
					to: '/dashboard/collections/terms',
					icon: HeartHandshake,
				},
			],
		},
		{
			title: 'Users',
			items: [
				{
					title: 'User',
					to: '/dashboard/collections/users',
					icon: Users,
				},
				{
					title: 'Preferensi User',
					to: '/collections/tipe-cafe',
					icon: Bolt,
				},
				{
					title: 'Rekomendasi User',
					to: '/dashboard/collections/user-recommendations',
					icon: Star,
				},
				{
					title: 'Review Kafe',
					to: '/dashboard/collections/cafe-reviews',
					icon: UserStar,
				},
			],
		},
		{
			title: 'Settings',
			items: [
				{
					title: 'Dashboard Settings',
					to: '/dashboard/settings',
					icon: Settings,
				},
			],
		},
	],
}
