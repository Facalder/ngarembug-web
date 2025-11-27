import { AirVentIcon } from 'lucide-react'
import { Link } from 'react-router'
import { Badge } from '@/components/ui/badge'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

export default function CafeCard() {
	return (
		<Link to="" className="group">
			<Card className="gap-3 shadow-none p-0 border-none">
				<img
					src="https://images.unsplash.com/photo-1567880905822-56f8e06fe630?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
					aria-hidden
					alt="Cafe Image"
					loading="lazy"
					className="bg-center rounded-md w-full h-80 object-cover"
				/>

				{/* Rating Section */}
				<div className="space-x-1">
					<span className="bg-primary-ngarembug px-2 py-0.5 rounded-full font-bricolage font-bold text-white">
						9.5
					</span>
					<span className="font-bold">Approved!</span>
					<span className="font-medium text-muted-foreground text-sm">
						(22 Google Reviews)
					</span>
				</div>

				{/* Title & Description */}
				<CardHeader className="gap-1 p-0">
					<CardTitle className="font-bricolage font-bold group-hover:text-primary-ngarembug text-2xl group-hover:underline">
						Diagram Coffee & Space
					</CardTitle>
					<CardDescription className="font-medium text-muted-foreground text-xs">
						Sukapura • Outdoor Cafe • 0.5km dari Telkom University
					</CardDescription>
				</CardHeader>

				{/* Detail Columns */}
				<CardContent className="flex gap-4 p-0">
					<div className="gap-y-1 grid">
						<span className="font-medium text-muted-foreground text-xs">
							Opening Hours
						</span>
						<span className="font-medium">13.00 - 22.00 WIB</span>
					</div>

					<div className="gap-y-1 grid">
						<span className="font-medium text-muted-foreground text-xs">
							Start From
						</span>
						<span className="font-medium">22K - 40K</span>
					</div>

					<div className="gap-y-1 grid">
						<span className="font-medium text-muted-foreground text-xs">
							Kapasitas
						</span>
						<span className="font-medium">6-12 orang</span>
					</div>
				</CardContent>

				{/* Facilities */}
				<CardFooter className="gap-2 p-0">
					<Badge variant="secondary" className="flex items-center gap-1">
						<AirVentIcon className="w-4 h-4 text-muted-foreground" />
						<span className="font-medium text-muted-foreground">
							Air Conditioner
						</span>
					</Badge>
					<Badge variant="secondary" className="flex items-center gap-1">
						<AirVentIcon className="w-4 h-4 text-muted-foreground" />
						<span className="font-medium text-muted-foreground">
							Air Conditioner
						</span>
					</Badge>
					<Badge variant="secondary" className="flex items-center gap-1">
						<AirVentIcon className="w-4 h-4 text-muted-foreground" />
						<span className="font-medium text-muted-foreground">
							Air Conditioner
						</span>
					</Badge>
				</CardFooter>
			</Card>
		</Link>
	)
}
