import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { InputSlug } from '@/components/input-slug'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'
import { Textarea } from '@/components/ui/textarea'
import type { Category } from '@/schema/index'

type CategoryMutateDrawerProps = {
	open: boolean
	onOpenChange: (open: boolean) => void
	currentRow?: Category
}

const categoryFormSchema = z.object({
	name: z.string().min(1, 'Masukan nama category'),
	slug: z.string().slugify(),
	description: z.string(),
})

type CategoryForm = z.infer<typeof categoryFormSchema>

export default function CategoriesMutateDrawer({
	open,
	onOpenChange,
	currentRow,
}: CategoryMutateDrawerProps) {
	const isUpdate = !!currentRow

	const form = useForm<CategoryForm>({
		resolver: zodResolver(categoryFormSchema),
		defaultValues: currentRow ?? {
			name: '',
			slug: '',
			description: '',
		},
	})

	const onSubmit = (_data: CategoryForm) => {
		onOpenChange(false)
		form.reset()
	}

	const nameValue = form.watch('name')

	React.useEffect(() => {
		form.setValue('slug', nameValue, { shouldValidate: true })
	}, [nameValue, form])

	return (
		<Sheet
			open={open}
			onOpenChange={(v) => {
				onOpenChange(v)
				form.reset()
			}}
		>
			<SheetContent className="flex flex-col">
				<SheetHeader className="text-start">
					<SheetTitle>{isUpdate ? 'Edit' : 'Tambah'} Kategori</SheetTitle>
					<SheetDescription>
						{isUpdate ? 'Sesuaikan kategori cafe.' : 'Masukan kategori baru.'}
						Tekan save untuk menyimpan atau draft untuk simpan ke draft
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form
						id="category-form"
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex-1 space-y-6 overflow-y-auto px-4"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nama kategori</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="Masukan nama kategori cafe"
											type="text"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="slug"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Slug</FormLabel>
									<FormControl>
										<InputSlug
											{...field}
											placeholder="Auto generate dari nama kategori "
											type="text"
											readOnly
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Deskripsi kategori</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											placeholder="Deskripsikan kategori kafe"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>

				<SheetFooter className="gap-2">
					<SheetClose asChild>
						<Button variant="secondary">Simpan ke draft</Button>
					</SheetClose>

					<Button form="categories-form" type="submit">
						Tambah kategori
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
