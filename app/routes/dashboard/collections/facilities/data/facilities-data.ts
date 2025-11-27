import { faker } from '@faker-js/faker'

faker.seed(12345)

const fasilitasList = [
	'Parkir Luas',
	'Ruang Tunggu Nyaman',
	'WiFi Gratis',
	'Ruang Meeting',
	'Mushola',
	'Area Merokok',
	'Toilet Umum',
	'Charging Station',
	'Kantin',
	'Layanan 24 Jam',
]

const fasilitasDescriptions = [
	'Fasilitas ini memberikan kenyamanan ekstra bagi pengunjung.',
	'Dirancang untuk memenuhi kebutuhan pengguna sepanjang hari.',
	'Memberikan ruang yang lebih baik untuk aktivitas harian.',
	'Meningkatkan pengalaman pelanggan dengan layanan tambahan.',
	'Membantu pengunjung merasa lebih aman dan nyaman.',
	'Memfasilitasi kegiatan operasional dengan lebih efisien.',
	'Disediakan untuk memenuhi kebutuhan dasar pengunjung.',
]

export const facilitiesData = Array.from({ length: 100 }, () => {
	const name = faker.helpers.arrayElement(fasilitasList)
	const statuses = ['draft', 'archived', 'published'] as const

	const createdAtDate = faker.date.past()
	const updatedAtDate = faker.date.recent()

	return {
		id: `FC-${faker.number.int({ min: 100000, max: 999999 })}`,
		name,
		slug: faker.helpers.slugify(name).toLowerCase(),
		description: faker.helpers.arrayElement(fasilitasDescriptions),
		status: faker.helpers.arrayElement(statuses),
		createdAt: createdAtDate.toISOString(),
		updatedAt: updatedAtDate.toISOString(),
	}
})
