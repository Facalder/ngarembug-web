import * as t from '@react-router/dev/routes';

export default [
	t.index('routes/_index.tsx'),

	...t.prefix('/dashboard', [
		t.layout('features/dashboard/layout.tsx', [
			t.index('routes/dashboard/_index.tsx'),

			...t.prefix('/collections', [
				...t.prefix('/categories', [
					t.index('routes/dashboard/collections/categories/_index.tsx'),
					t.route(
						'/new',
						'routes/dashboard/collections/categories/category-new.tsx',
					),
					t.route(
						'/:id',
						'routes/dashboard/collections/categories/category-detail.tsx',
					),
				]),

				// ...t.prefix('/cafes', [
				// 	t.index('routes/dashboard/collections/cafes/_index.tsx'),
				// 	t.route('/new', 'routes/dashboard/collections/cafes/new-cafe.tsx'),
				// 	t.route('/:id', 'routes/dashboard/collections/cafes/cafe-detail.tsx'),
				// ]),

				...t.prefix('/facilities', [
					t.index('routes/dashboard/collections/facilities/_index.tsx'),
					t.route(
						'/new',
						'routes/dashboard/collections/facilities/facility-new.tsx',
					),
					t.route(
						'/:id',
						'routes/dashboard/collections/facilities/facility-detail.tsx',
					),
				]),

				// ...t.prefix('/areas', [
				// 	t.index('routes/dashboard/collections/areas/_index.tsx'),
				// 	t.route('/new', 'routes/dashboard/collections/areas/new-area.tsx'),
				// 	t.route('/:id', 'routes/dashboard/collections/areas/area-detail.tsx'),
				// ]),

				// ...t.prefix('/users', [
				// 	t.index('routes/dashboard/collections/users/_index.tsx'),
				// 	t.route('/new', 'routes/dashboard/collections/users/new-user.tsx'),
				// 	t.route('/:id', 'routes/dashboard/collections/users/user-detail.tsx'),
				// ]),

				// ...t.prefix('/reviews', [
				// 	t.index('routes/dashboard/collections/reviews/_index.tsx'),
				// 	t.route(
				// 		'/new',
				// 		'routes/dashboard/collections/reviews/new-review.tsx',
				// 	),
				// 	t.route(
				// 		'/:id',
				// 		'routes/dashboard/collections/reviews/review-detail.tsx',
				// 	),
				// ]),

				// ...t.prefix('/user-preferences', [
				// 	t.index('routes/dashboard/collections/user-preferences/_index.tsx'),
				// 	t.route(
				// 		'/new',
				// 		'routes/dashboard/collections/user-preferences/new-user-preference.tsx',
				// 	),
				// 	t.route(
				// 		'/:id',
				// 		'routes/dashboard/collections/user-preferences/user-preference-detail.tsx',
				// 	),
				// ]),

				// ...t.prefix('/user-recommendations', [
				// 	t.index(
				// 		'routes/dashboard/collections/user-recommendations/_index.tsx',
				// 	),
				// 	t.route(
				// 		'/new',
				// 		'routes/dashboard/collections/user-recommendations/new-user-recommendation.tsx',
				// 	),
				// 	t.route(
				// 		'/:id',
				// 		'routes/dashboard/collections/user-recommendations/user-recommendation-detail.tsx',
				// 	),
				// ])
			]),
		]),
	]),
] satisfies t.RouteConfig;
