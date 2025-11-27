import type {
	ColumnFiltersState,
	OnChangeFn,
	PaginationState,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { type NavigateFunction, useSearchParams } from 'react-router'

type SearchRecord = Record<string, unknown>

type UseTableUrlStateParams = {
	search?: SearchRecord // Optional, for backward compatibility
	navigate?: NavigateFunction // Optional, for backward compatibility
	pagination?: {
		pageKey?: string
		pageSizeKey?: string
		defaultPage?: number
		defaultPageSize?: number
	}
	globalFilter?: {
		enabled?: boolean
		key?: string
		trim?: boolean
	}
	columnFilters?: Array<
		| {
				columnId: string
				searchKey: string
				type?: 'string'
				serialize?: (value: unknown) => string
				deserialize?: (value: string | null) => unknown
		  }
		| {
				columnId: string
				searchKey: string
				type: 'array'
				serialize?: (value: unknown) => string
				deserialize?: (value: string | null) => unknown
		  }
	>
}

type UseTableUrlStateReturn = {
	globalFilter?: string
	onGlobalFilterChange?: OnChangeFn<string>
	columnFilters: ColumnFiltersState
	onColumnFiltersChange: OnChangeFn<ColumnFiltersState>
	pagination: PaginationState
	onPaginationChange: OnChangeFn<PaginationState>
	ensurePageInRange: (
		pageCount: number,
		opts?: { resetTo?: 'first' | 'last' },
	) => void
}

export function useTableUrlState(
	params: UseTableUrlStateParams,
): UseTableUrlStateReturn {
	const [searchParams, setSearchParams] = useSearchParams()

	const {
		search: _search, // Ignored, using searchParams directly
		navigate: _navigate, // Ignored, using setSearchParams directly
		pagination: paginationCfg,
		globalFilter: globalFilterCfg,
		columnFilters: columnFiltersCfg = [],
	} = params

	const pageKey = paginationCfg?.pageKey ?? 'page'
	const pageSizeKey = paginationCfg?.pageSizeKey ?? 'pageSize'
	const defaultPage = paginationCfg?.defaultPage ?? 1
	const defaultPageSize = paginationCfg?.defaultPageSize ?? 10

	const globalFilterKey = globalFilterCfg?.key ?? 'filter'
	const globalFilterEnabled = globalFilterCfg?.enabled ?? true
	const trimGlobal = globalFilterCfg?.trim ?? true

	// Helper to update search params
	const updateSearchParams = (
		updater: (prev: URLSearchParams) => Record<string, string | undefined>,
		replace = false,
	) => {
		setSearchParams(
			(prev) => {
				const updates = updater(prev)
				const newParams = new URLSearchParams(prev)

				Object.entries(updates).forEach(([key, value]) => {
					if (value === undefined || value === '') {
						newParams.delete(key)
					} else {
						newParams.set(key, value)
					}
				})

				return newParams
			},
			{ replace },
		)
	}

	const initialColumnFilters: ColumnFiltersState = useMemo(() => {
		const collected: ColumnFiltersState = []
		for (const cfg of columnFiltersCfg) {
			const raw = searchParams.get(cfg.searchKey)
			const deserialize = cfg.deserialize ?? ((v: string | null) => v)
			if (cfg.type === 'string') {
				const value = (deserialize(raw) as string) ?? ''
				if (typeof value === 'string' && value.trim() !== '') {
					collected.push({ id: cfg.columnId, value })
				}
			} else {
				// For arrays, expect comma-separated values or JSON
				let value: unknown[] = []
				if (raw) {
					try {
						value = JSON.parse(raw)
					} catch {
						value = raw.split(',').filter(Boolean)
					}
				}
				value = (deserialize(raw) as unknown[]) ?? value
				if (Array.isArray(value) && value.length > 0) {
					collected.push({ id: cfg.columnId, value })
				}
			}
		}
		return collected
	}, [columnFiltersCfg, searchParams])

	const [columnFilters, setColumnFilters] =
		useState<ColumnFiltersState>(initialColumnFilters)

	const pagination: PaginationState = useMemo(() => {
		const rawPage = searchParams.get(pageKey)
		const rawPageSize = searchParams.get(pageSizeKey)
		const pageNum = rawPage ? parseInt(rawPage, 10) : defaultPage
		const pageSizeNum = rawPageSize
			? parseInt(rawPageSize, 10)
			: defaultPageSize
		return {
			pageIndex: Math.max(0, pageNum - 1),
			pageSize: pageSizeNum,
		}
	}, [searchParams, pageKey, pageSizeKey, defaultPage, defaultPageSize])

	const onPaginationChange: OnChangeFn<PaginationState> = (updater) => {
		const next = typeof updater === 'function' ? updater(pagination) : updater
		const nextPage = next.pageIndex + 1
		const nextPageSize = next.pageSize

		updateSearchParams(() => ({
			[pageKey]: nextPage <= defaultPage ? undefined : String(nextPage),
			[pageSizeKey]:
				nextPageSize === defaultPageSize ? undefined : String(nextPageSize),
		}))
	}

	const [globalFilter, setGlobalFilter] = useState<string | undefined>(() => {
		if (!globalFilterEnabled) return undefined
		const raw = searchParams.get(globalFilterKey)
		return raw ?? ''
	})

	const onGlobalFilterChange: OnChangeFn<string> | undefined =
		globalFilterEnabled
			? (updater) => {
					const next =
						typeof updater === 'function'
							? updater(globalFilter ?? '')
							: updater
					const value = trimGlobal ? next.trim() : next
					setGlobalFilter(value)

					updateSearchParams(() => ({
						[pageKey]: undefined,
						[globalFilterKey]: value || undefined,
					}))
				}
			: undefined

	const onColumnFiltersChange: OnChangeFn<ColumnFiltersState> = (updater) => {
		const next =
			typeof updater === 'function' ? updater(columnFilters) : updater
		setColumnFilters(next)

		const patch: Record<string, string | undefined> = {}

		for (const cfg of columnFiltersCfg) {
			const found = next.find((f) => f.id === cfg.columnId)
			const serialize = cfg.serialize ?? ((v: unknown) => String(v))
			if (cfg.type === 'string') {
				const value =
					typeof found?.value === 'string' ? (found.value as string) : ''
				patch[cfg.searchKey] =
					value.trim() !== '' ? serialize(value) : undefined
			} else {
				const value = Array.isArray(found?.value)
					? (found?.value as unknown[])
					: []
				patch[cfg.searchKey] = value.length > 0 ? serialize(value) : undefined
			}
		}

		updateSearchParams(() => ({
			[pageKey]: undefined,
			...patch,
		}))
	}

	const ensurePageInRange = (
		pageCount: number,
		opts: { resetTo?: 'first' | 'last' } = { resetTo: 'first' },
	) => {
		const currentPage = searchParams.get(pageKey)
		const pageNum = currentPage ? parseInt(currentPage, 10) : defaultPage
		if (pageCount > 0 && pageNum > pageCount) {
			updateSearchParams(
				() => ({
					[pageKey]: opts.resetTo === 'last' ? String(pageCount) : undefined,
				}),
				true, // replace history
			)
		}
	}

	return {
		globalFilter: globalFilterEnabled ? (globalFilter ?? '') : undefined,
		onGlobalFilterChange,
		columnFilters,
		onColumnFiltersChange,
		pagination,
		onPaginationChange,
		ensurePageInRange,
	}
}
