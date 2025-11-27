import { z } from 'zod'

export const areasSchema = z.object({
	id: z.string(),

	city: z.string(),
	slug: z.string(),
	description: z.string(),

	status: z.enum(['published', 'draft', 'archived']),

	updatedAt: z.iso.datetime(),
	createdAt: z.iso.datetime(),
})

export type Area = z.infer<typeof areasSchema>
