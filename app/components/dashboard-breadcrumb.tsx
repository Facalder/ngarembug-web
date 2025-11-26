import { Link, useLocation } from 'react-router'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function DashboardBreadcrumb() {
	const location = useLocation()
	const pathname = location.pathname

	// Split path: "/dashboard/categories/create"
	const segments = pathname.split('/').filter(Boolean)

	const paths = segments.map((seg, i) => ({
		label: capitalize(seg.replace(/-/g, ' ')),
		href: `/${segments.slice(0, i + 1).join('/')}`,
	}))

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{paths.map((item, i) => {
					const isLast = i === paths.length - 1

					return (
						<BreadcrumbItem key={item.href}>
							{!isLast ? (
								<BreadcrumbLink asChild>
									<Link to={item.href}>{item.label}</Link>
								</BreadcrumbLink>
							) : (
								<BreadcrumbPage>{item.label}</BreadcrumbPage>
							)}

							{!isLast && <BreadcrumbSeparator />}
						</BreadcrumbItem>
					)
				})}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
