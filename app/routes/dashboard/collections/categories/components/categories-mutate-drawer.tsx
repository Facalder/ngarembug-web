import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
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
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'
import type { Category } from '@/schema/index'

type CategoryMutateDrawerProps = {
	open: boolean
	onOpenChange: (open: boolean) => void
	currentRow?: Category
}

const categoryFormSchema = z.object({
	name: z.string().min(1, 'Masukan nama category'),
	slug: z.string().slugify(),
	description: z.string().nullable(),
})

type CategoryForm = z.infer<typeof categoryFormSchema>

export default function CategoriesMutateDrawer({
	open,
	onOpenChange,
	currentRow,
}: CategoryMutateDrawerProps) {
	const _isUpdate = !!currentRow

	const _form = useForm<CategoryForm>({
		resolver: zodResolver(categoryFormSchema),
		defaultValues: currentRow ?? {
			name: '',
			slug: '',
			description: '',
		},
	})

	const _onSubmit = (_data: CategoryForm) => {
		onOpenChange(false)
		_form.reset()
	}

	return (
		<Sheet
			open={open}
			onOpenChange={(v) => {
				onOpenChange(v)
				_form.reset()
			}}
		>
			<SheetContent className="flex flex-col">
				<SheetHeader className="text-start">
					<SheetTitle>{_isUpdate ? 'Update' : 'Create'} Task</SheetTitle>
					<SheetDescription>
						{_isUpdate
							? 'Update the task by providing necessary info.'
							: 'Add a new task by providing necessary info.'}
						Click save when you&apos;re done.
					</SheetDescription>
				</SheetHeader>

				<Form {..._form}>
					<form id="category-form" onSubmit={_form.handleSubmit(_onSubmit)}>
						<FormField
							control={_form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nama category</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="Masukan nama category"
											type="text"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	)
}
