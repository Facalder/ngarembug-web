import { MoreHorizontal } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';
import type { SidebarData } from '@/features/dashboard/types/sidebar-type';
import { Badge } from '@/components/ui/badge';

export default function SidebarNavGroups({ data }: { data: SidebarData }) {
	const location = useLocation();
	const { isMobile } = useSidebar();

	return (
		<>
			{data.navGroups.map((group) => (
				<SidebarGroup key={group.title}>
					<SidebarGroupLabel className='flex justify-between'>
						{group.title}
						<span>{group.items.length}</span>
					</SidebarGroupLabel>

					<SidebarMenu>
						{group.items.map((item) => {
							const isActive = item.to === location.pathname;
							const hasChildren = item.children && item.children.length > 0;

							if (!hasChildren) {
								return (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton
											asChild
											isActive={isActive}
											tooltip={item.title}
										>
											<Link to={item.to || ''}>
												{item.icon && <item.icon />}
												<span>{item.title}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							}

							return (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										isActive={isActive}
										tooltip={item.title}
									>
										<Link to={item.to || ''}>
											{item.icon && <item.icon />}
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>

									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<SidebarMenuAction showOnHover>
												<MoreHorizontal />
												<span className="sr-only">More</span>
											</SidebarMenuAction>
										</DropdownMenuTrigger>

										<DropdownMenuContent
											className="w-48 rounded-lg"
											side={isMobile ? 'bottom' : 'right'}
											align={isMobile ? 'end' : 'start'}
										>
											{item.children?.map((sub) => (
												<DropdownMenuItem key={sub.to ?? sub.title}>
													<Link
														to={sub.to || ''}
														className="flex items-center gap-2"
													>
														{sub.icon && <sub.icon />}
														<span>{sub.title}</span>
													</Link>
												</DropdownMenuItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
								</SidebarMenuItem>
							);
						})}
					</SidebarMenu>
				</SidebarGroup>
			))}
		</>
	);
}
