import { Link, useLocation } from 'react-router';
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { NavItems } from '@/features/dashboard/types/sidebar-type';

export default function SidebarNavMain({ data }: { data: NavItems[] }) {
	const location = useLocation();

	return (
		<>
			{data.map((d) => (
				<SidebarMenu key={d.title} className="px-2">
					<SidebarMenuItem>
						<SidebarMenuButton
							tooltip={d.title}
							asChild
							isActive={d.to === location.pathname}
						>
							<Link to={d.to || ''}>
								{d.icon && <d.icon />}
								<span>{d.title}</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			))}
		</>
	);
}
