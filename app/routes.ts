import * as t from '@react-router/dev/routes'

export default [
	t.layout('components/layout/client-layout.tsx', [
		t.index('routes/_index.tsx'),
	]),

	...t.prefix('/dashboard', [
		t.layout('components/layout/dashboard-layout.tsx', [
			t.index('routes/dashboard/_index.tsx'),

			...t.prefix('/collections', [
				// t.route('/cafe', 'routes/dashboard/collections/cafe/_index.tsx'),

				t.route('/areas', 'routes/dashboard/collections/areas/_index.tsx'),

				// t.route(
				// 	'/addresses',
				// 	'routes/dashboard/collections/addresses/_index.tsx',
				// ),

				t.route(
					'/categories',
					'routes/dashboard/collections/categories/_index.tsx',
				),

				t.route(
					'/facilities',
					'routes/dashboard/collections/facilities/_index.tsx',
				),

				// t.route('/terms', 'routes/dashboard/collections/terms/_index.tsx'),
			]),
		]),
	]),
] satisfies t.RouteConfig
