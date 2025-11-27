import type * as React from 'react'
import { cn } from '@/lib/utils'

interface InputSlugProps extends React.ComponentProps<'input'> {
	value: string
}

export function InputSlug({
	className,
	type = 'text',
	value,
	...props
}: InputSlugProps) {
	const generateSlug = (text: string) =>
		text
			.toLowerCase()
			.trim()
			.replace(/[\s\W-]+/g, '-')
			.replace(/^-+|-+$/g, '')

	const slug = generateSlug(value)

	return (
		<input
			type={type}
			value={slug}
			readOnly
			className={cn(
				'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
				className,
			)}
			{...props}
		/>
	)
}
