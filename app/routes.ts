import { index, layout, type RouteConfig } from '@react-router/dev/routes';

export default [
	layout('components/layout/client-layout.tsx', [index('routes/_index.tsx')]),
] satisfies RouteConfig;
