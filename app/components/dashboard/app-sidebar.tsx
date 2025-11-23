import { Command } from 'lucide-react';
import type * as React from 'react';
import { Link } from 'react-router';
import SidebarNavGroups from '@/components/dashboard/sidebar-nav-groups';
import SidebarNavMain from '@/components/dashboard/sidebar-nav-main';
import SidebarNavUser from '@/components/dashboard/sidebar-nav-user';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from '@/components/ui/sidebar';
import {
	sidebarDataNavGroups,
	sidebarDataNavMain,
	user,
} from '@/features/dashboard/data/sidebar-data';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link to="/">
								<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">Acme Inc</span>
									<span className="truncate text-xs">Enterprise</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarNavMain data={sidebarDataNavMain} />
				<SidebarNavGroups data={sidebarDataNavGroups} />
			</SidebarContent>
			<SidebarFooter>
				<SidebarNavUser user={user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
