import { z } from 'zod'

export const reviewSchema = z.object({
	id: z.string(),
	cafeId: z.string(),

	rating: z.number(),
	reviewTitle: z.string(),
	slug: z.string(),
	reviewDescription: z.string(),
	visitDate: z.date(),
	wentWith: z.enum(['business', 'couple', 'family', 'friends', 'solo']),

	isApproved: z.boolean(),
	isDeleted: z.boolean(),

	status: z.enum(['published', 'draft', 'archived']),
	approvedBy: z.string(),

	approvedAt: z.iso.datetime(),
	updatedAt: z.iso.datetime(),
	createdAt: z.iso.datetime(),
})

export type Review = z.infer<typeof reviewSchema>
