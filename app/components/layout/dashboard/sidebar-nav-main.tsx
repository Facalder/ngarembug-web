import { Link, useLocation } from 'react-router'
import type { NavItems } from '@/components/layout/types/sidebar-type'
import { Badge } from '@/components/ui/badge'
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'

export default function SidebarNavMain({ data }: { data: NavItems[] }) {
	const location = useLocation()

	return (
		<>
			{data.map((d) => (
				<SidebarMenu key={d.title} className="px-2">
					<SidebarMenuItem>
						{d.to ? (
							<SidebarMenuButton
								tooltip={d.title}
								asChild
								isActive={d.to === location.pathname}
							>
								<Link to={d.to} className="flex items-center gap-2">
									{d.icon && <d.icon className="size-4" />}
									<span>{d.title}</span>
									{d.title === 'Notifications' && d.badge && (
										<Badge className="ml-auto size-fit">{d.badge}</Badge>
									)}
								</Link>
							</SidebarMenuButton>
						) : (
							<SidebarMenuButton
								tooltip={d.title}
								className="flex items-center gap-2"
							>
								{d.icon && <d.icon className="size-4" />}
								<span>{d.title}</span>
								{d.title === 'Notifications' && d.badge && (
									<Badge variant="default" className="ml-auto size-fit">
										{d.badge}
									</Badge>
								)}
							</SidebarMenuButton>
						)}
					</SidebarMenuItem>
				</SidebarMenu>
			))}
		</>
	)
}
