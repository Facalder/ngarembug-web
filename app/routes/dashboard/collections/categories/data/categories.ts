import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(12345)

export const categoriesData = Array.from({ length: 100 }, () => {
	const name = faker.commerce.productName()
	// Map status ke lowercase sesuai tipe target
	const statuses = ['draft', 'archived', 'published'] as const

	const createdAtDate = faker.date.past()
	const updatedAtDate = faker.date.recent()

	return {
		id: `CT ${faker.number.int().toFixed()}`,
		name,
		slug: faker.helpers.slugify(name).toLowerCase(),
		description: faker.commerce.productDescription(),
		status: faker.helpers.arrayElement(statuses),
		createdAt: createdAtDate.toISOString(),
		updatedAt: updatedAtDate.toISOString(),
	}
})
