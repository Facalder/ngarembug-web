import * as t from '@react-router/dev/routes';

export default [
	t.index('routes/_index.tsx'),

	...t.prefix('/dashboard', [
		t.layout('features/dashboard/layout.tsx', [
			t.index('routes/dashboard/_index.tsx'),
		]),
	]),
] satisfies t.RouteConfig;
