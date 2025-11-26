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
import type { Facility } from '@/schema/index'

type FacilityMutateDrawerProps = {
	open: boolean
	onOpenChange: (open: boolean) => void
	currentRow?: Facility
}

const facilityFormSchema = z.object({
	name: z.string().min(1, 'Masukan nama facility'),
	slug: z.string().slugify(),
	description: z.string(),
})

type FacilityForm = z.infer<typeof facilityFormSchema>

export default function FacilitiesMutateDrawer({
	open,
	onOpenChange,
	currentRow,
}: FacilityMutateDrawerProps) {
	const isUpdate = !!currentRow

	const form = useForm<FacilityForm>({
		resolver: zodResolver(facilityFormSchema),
		defaultValues: currentRow ?? {
			name: '',
			slug: '',
			description: '',
		},
	})

	const onSubmit = (_data: FacilityForm) => {
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
					<SheetTitle>{isUpdate ? 'Edit' : 'Tambah'} Fasilitas</SheetTitle>
					<SheetDescription>
						{isUpdate ? 'Sesuaikan fasilitas cafe.' : 'Masukan fasilitas baru.'}
						Tekan save untuk menyimpan atau draft untuk simpan ke draft
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form
						id="facility-form"
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex-1 space-y-6 overflow-y-auto px-4"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nama fasilitas</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="Masukan nama fasilitas cafe"
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

					<Button form="facilities-form" type="submit">
						Tambah fasilitas
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
