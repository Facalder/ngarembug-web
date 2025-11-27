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
import type { Area } from '@/schema/index'

type AreaMutateDrawerProps = {
	open: boolean
	onOpenChange: (open: boolean) => void
	currentRow?: Area
}

const areaFormSchema = z.object({
	city: z.string().min(1, 'Masukan nama area'),
	slug: z.string().slugify(),
	description: z.string(),
})

type AreaForm = z.infer<typeof areaFormSchema>

export default function AreasMutateDrawer({
	open,
	onOpenChange,
	currentRow,
}: AreaMutateDrawerProps) {
	const isUpdate = !!currentRow

	const form = useForm<AreaForm>({
		resolver: zodResolver(areaFormSchema),
		defaultValues: currentRow ?? {
			city: '',
			slug: '',
			description: '',
		},
	})

	const onSubmit = (_data: AreaForm) => {
		onOpenChange(false)
		form.reset()
	}

	const nameValue = form.watch('city')

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
					<SheetTitle>{isUpdate ? 'Edit' : 'Tambah'} Area</SheetTitle>
					<SheetDescription>
						{isUpdate ? 'Sesuaikan area kafe.' : 'Masukan area baru.'}
						Tekan save untuk menyimpan atau draft untuk simpan ke draft
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form
						id="area-form"
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex-1 space-y-6 overflow-y-auto px-4"
					>
						<FormField
							control={form.control}
							name="city"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Kota</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="Masukan nama kota"
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
											placeholder="Auto generate dari nama fasilitas"
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
									<FormLabel>Deskripsi fasilitas</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											placeholder="Deskripsikan fasilitas kafe"
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

					<Button form="areas-form" type="submit">
						Tambah fasilitas
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
