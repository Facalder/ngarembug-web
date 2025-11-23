import {
	Blocks,
	Home,
	Inbox,
	MapIcon,
	Plus,
	Search,
	Store,
	TagIcon,
} from 'lucide-react';
import type {
	NavItems,
	SidebarData,
	User,
} from '@/features/dashboard/types/sidebar-type';

export const user: User = {
	name: 'Najla',
	email: 'najlaaisy@gmail.com',
	avatar: '',
};

export const sidebarDataNavMain: NavItems[] = [
	{
		title: 'Home',
		to: '/',
		icon: Home,
	},

	{
		title: 'Search',
		icon: Search,
	},

	{
		title: 'Inbox',
		icon: Inbox,
	},
];

export const sidebarDataNavGroups: SidebarData = {
	navGroups: [
		{
			title: 'Collections',
			items: [
				{
					title: 'Cafe',
					to: '/dashboard/collections/cafes',
					icon: Store,
					children: [
						{
							title: 'Cafe List',
							to: '/dashboard/collections/cafes',
							icon: Plus,
						},
						{
							title: 'Tambah Cafe Baru',
							to: '/dashboard/collections/cafes/new',
							icon: Plus,
						},
					],
				},
				{
					title: 'Category',
					to: '/dashboard/collections/categories',
					icon: TagIcon,
					children: [
						{
							title: 'Add Category',
							to: '/collections/category/new',
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
};
