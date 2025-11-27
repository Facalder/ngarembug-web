import { Outlet } from 'react-router'
import ClientNavbar from '@/components/layout/client/navbar'

export default function ClientLayout() {
	return (
		<>
			<ClientNavbar />
			<main className="space-y-14 mt-4">
				<Outlet />
			</main>
		</>
	)
}
