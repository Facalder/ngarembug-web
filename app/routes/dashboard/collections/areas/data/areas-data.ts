import { faker } from '@faker-js/faker'
import type { Area } from '@/schema'

faker.seed(12345) // biar stabil hasilnya

export const areasData: Area[] = Array.from({ length: 100 }, () => {
	const city = faker.location.city()
	const statuses = ['draft', 'archived', 'published'] as const

	const createdAtDate = faker.date.past()
	const updatedAtDate = faker.date.recent()

	return {
		id: `AR ${faker.number.int().toFixed()}`,
		city,
		slug: faker.helpers.slugify(city).toLowerCase(),
		description: faker.lorem.sentence(),
		status: faker.helpers.arrayElement(statuses),
		createdAt: createdAtDate.toISOString(),
		updatedAt: updatedAtDate.toISOString(),
	}
})
