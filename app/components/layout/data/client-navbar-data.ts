import type {
	NavbarItems,
	User,
} from '@/components/layout/types/client-navbar-type';

export const clientUser: User = {
	name: '',
	email: '',
	image: '',
};

export const clientNavbarMainItems: NavbarItems[] = [
	{
		title: 'Cafe',
		to: '/cafe',
	},
	{
		title: 'Coworking Space',
		to: '/coworking-space',
	},
	{
		title: 'Aula',
		to: '/aula',
	},
	{
		title: 'Private Room',
		to: '/private-room',
	},
];

export const clientNavbarInfoItems: NavbarItems[] = [
	{
		title: 'Tentang Kami',
		to: '/about-us',
	},
	{
		title: 'Pusat Bantuan',
		to: '/help-center',
	},
	{
		title: 'Kebijakan Privasi',
		to: '/privacy-policy',
	},
	{
		title: 'Jadi Partner ngarembug',
		to: '/become-partner',
	},
];
