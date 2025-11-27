import { Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import {
	clientNavbarInfoItems,
	clientNavbarMainItems,
} from '@/components/layout/data/client-navbar-data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export default function ClientNavbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="top-0 left-0 z-40 sticky bg-white border-b">
			<div className="hidden lg:block bg-stone-50">
				<div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="flex justify-end items-center gap-6 h-10">
						{clientNavbarInfoItems.map((item) => (
							<div key={item.title} className="flex items-center">
								<Link
									to={item.to || ' '}
									className="text-muted-foreground hover:text-primary-ngarembug text-sm transition-colors"
								>
									{item.title}
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Main Navbar */}
			<div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-1 shrink-0">
						<img src="/img/logo.svg" alt="ngarembug - logo" loading="lazy" />
						<span className="font-bricolage font-extrabold text-primary-ngarembug text-2xl">
							ngarembug
						</span>
					</Link>

					{/* Desktop Search Bar */}
					<div className="hidden md:flex flex-1 mx-8">
						<div className="relative w-full max-w-sm">
							<Search className="top-1/2 left-4 absolute w-5 h-5 text-muted-foreground -translate-y-1/2 transform" />
							<Input
								type="text"
								placeholder="Cari 'nama tempat, jalan, atau patokan'"
								className="bg-stone-100 focus:bg-white shadow-none py-2.5 pr-12 pl-12 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-stone-300 w-full text-foreground placeholder:text-muted-foreground transition-colors"
							/>
						</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden xl:flex items-center gap-6 mr-4">
						{clientNavbarMainItems.map((item) => (
							<Link
								key={item.title}
								to={item.to || ' '}
								className="font-medium text-muted-foreground hover:text-primary-ngarembug text-sm transition-colors"
							>
								{item.title}
							</Link>
						))}
					</div>

					{/* Right Section - Desktop */}
					<div className="hidden md:flex items-center gap-2">
						<Button
							variant="ghost"
							className="font-medium text-primary-ngarembug hover:text-primary-ngarembug"
						>
							Masuk
						</Button>
						<Button>Buat Akun</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className="lg:hidden ml-2">
						<Button
							onClick={() => setIsOpen(!isOpen)}
							variant="secondary"
							size="icon"
						>
							{isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
						</Button>
					</div>
				</div>

				{isOpen && (
					<div className="lg:hidden pb-4 border-gray-200 border-t">
						{/* Mobile Search */}
						<div className="mt-4 mb-4">
							<div className="relative">
								<Search className="top-1/2 left-4 absolute w-4 h-4 text-muted-foreground -translate-y-1/2 transform" />
								<Input
									type="text"
									placeholder="Cari 'nama tempat, jalan, atau patokan'"
									className="bg-stone-100 focus:bg-white shadow-none py-2.5 pr-11 pl-11 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-stone-300 w-full text-foreground transition-colors placeholder:muted-foreground"
								/>
							</div>
						</div>

						{/* Mobile Navigation Items */}
						<div className="space-y-1 mb-3">
							{clientNavbarMainItems.map((item) => (
								<Link
									key={item.title}
									to={item.to || ' '}
									className="block hover:bg-gray-100 px-3 py-2 rounded-md font-medium text-muted-foreground hover:text-primary-ngarembug text-sm"
									onClick={() => setIsOpen(false)}
								>
									{item.title}
								</Link>
							))}
						</div>

						{/* Divider */}
						<Separator className="my-4" />

						<div className="space-y-1 mb-3">
							{clientNavbarInfoItems.map((item) => (
								<Link
									key={item.title}
									to={item.to || ' '}
									className="block hover:bg-gray-100 px-3 py-2 rounded-md font-medium text-muted-foreground hover:text-primary-ngarembug text-sm"
									onClick={() => setIsOpen(false)}
								>
									{item.title}
								</Link>
							))}
						</div>

						<Separator className="my-4" />

						{/* Mobile Auth Buttons */}
						<div className="flex gap-2 mb-3">
							<Button
								variant="secondary"
								className="flex-1 hover:text-primary-ngarembug"
								onClick={() => setIsOpen(false)}
							>
								Masuk
							</Button>
							<Button className="flex-1" onClick={() => setIsOpen(false)}>
								Buat Akun
							</Button>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}
