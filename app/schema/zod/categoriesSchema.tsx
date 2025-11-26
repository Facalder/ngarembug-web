import { z } from 'zod'

export const categorySchema = z.object({
	id: z.string(),
	name: z.string(),
	slug: z.string(),
	description: z.string(),
	status: z.enum(['published', 'draft', 'archived']),

	updatedAt: z.iso.datetime(),
	createdAt: z.iso.datetime(),
})

export type Category = z.infer<typeof categorySchema>
