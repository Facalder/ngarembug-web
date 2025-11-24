import { DraftingCompass, Plus, Timer, User } from 'lucide-react';
import React from 'react';
import { Form } from 'react-router';
import { InputSlug } from '@/components/input-slug';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card';
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function FacilityForm() {
	const [name, setName] = React.useState('');
	const [_slug, setSlug] = React.useState('');

	const handleNameChange = (val: string) => {
		setName(val);
		setSlug(val);
	};

	return (
		<Form>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
				<Card className="shadow-none bg-background rounded-none lg:col-span-3 h-max">
					<CardHeader>
						<CardDescription>General</CardDescription>
					</CardHeader>
					<CardContent>
						<FieldGroup>
							<div className="flex lg:flex-row flex-col items-baseline gap-4">
								<Field>
									<FieldLabel htmlFor="name">
										Nama fasilitas
										<span className="text-destructive">*</span>
									</FieldLabel>
									<Input
										id="name"
										type="text"
										name="name"
										placeholder="Masukan nama fasilitas"
										onChange={(e) => handleNameChange(e.target.value)}
										required
									/>
									<FieldDescription>Nama fasilitas harus unik</FieldDescription>
								</Field>

								<Field>
									<FieldLabel htmlFor="slug">Slug</FieldLabel>
									<InputSlug
										id="slug"
										type="text"
										name="slug"
										value={name}
										placeholder="Auto generate dari nama fasilitas"
									/>
								</Field>
							</div>

							<Field>
								<FieldLabel htmlFor="description">
									Deskripsi fasilitas
								</FieldLabel>
								<Textarea
									id="description"
									name="description"
									placeholder="Masukan nama fasilitas"
									required
								/>
								<FieldDescription>Deskripsikan fasilitas</FieldDescription>
							</Field>
						</FieldGroup>
					</CardContent>
				</Card>

				<aside className="space-y-5">
					<Card className="shadow-none bg-background rounded-none">
						<CardHeader>
							<CardDescription>Entries</CardDescription>
						</CardHeader>

						<CardContent className="flex flex-col gap-2">
							<Button variant="secondary">
								<DraftingCompass />
								<span>Simpan ke draft</span>
							</Button>
							<Button disabled>
								<Plus />
								<span>Tambah fasilitas baru</span>
							</Button>
						</CardContent>
					</Card>

					<Card className="shadow-none bg-background rounded-none">
						<CardHeader>
							<CardDescription>Description</CardDescription>
						</CardHeader>

						<CardContent>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li className="flex items-center justify-between">
									<span className="inline-flex gap-1">
										<Timer className="size-4" />
										Created at
									</span>
									<span>17 August 2025 - 00.23</span>
								</li>

								<li className="flex items-center justify-between">
									<span className="inline-flex gap-1">
										<User className="size-4" />
										Created by
									</span>
									<span>Najla Aisy</span>
								</li>
							</ul>
						</CardContent>
					</Card>
				</aside>
			</div>
		</Form>
	);
}
