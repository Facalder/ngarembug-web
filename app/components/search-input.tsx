import { Search } from 'lucide-react';
import type React from 'react';
import { Input } from '@/components/ui/input';

export default function SearchInput({
	className,
	placeholder,
	...props
}: React.ComponentProps<'input'>) {
	return (
		<div className="relative w-full max-w-sm">
			<Search className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
			<Input
				type="text"
				placeholder="Cari 'nama tempat, jalan, atau patokan'"
				className="bg-stone-100 py-2 pr-4 pl-10 border-none rounded-full focus:outline-none focus:ring-2 w-full"
				{...props}
			/>
		</div>
	);
}
