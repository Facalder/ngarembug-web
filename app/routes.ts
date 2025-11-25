import * as t from '@react-router/dev/routes'

export default [
	t.index('routes/_index.tsx'),

	...t.prefix('/dashboard', [
		t.layout('components/layout/dashboard-layout.tsx', [
			t.index('routes/dashboard/_index.tsx'),

			...t.prefix('/collections', [
				t.route(
					'/categories',
					'routes/dashboard/collections/categories/_index.tsx',
				),
			]),
		]),
	]),
]
