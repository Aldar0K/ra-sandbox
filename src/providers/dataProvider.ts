import simpleRestProvider from 'ra-data-simple-rest'
import { fetchUtils } from 'react-admin'

const jsonServerHttpClient: typeof fetchUtils.fetchJson = (url, options = {}) => {
  const base = typeof window === 'undefined' ? 'http://localhost' : window.location.origin
  const parsedUrl = new URL(url, base)

  const sortParam = parsedUrl.searchParams.get('sort')
  const rangeParam = parsedUrl.searchParams.get('range')
  const filterParam = parsedUrl.searchParams.get('filter')

  if (sortParam) {
    try {
      const [field, order] = JSON.parse(sortParam) as [string, string]
      parsedUrl.searchParams.delete('sort')
      parsedUrl.searchParams.set('_sort', field)
      parsedUrl.searchParams.set('_order', order.toLowerCase())
    } catch {
      // Leave original params as-is if parsing fails.
    }
  }

  if (rangeParam) {
    try {
      const [start, end] = JSON.parse(rangeParam) as [number, number]
      parsedUrl.searchParams.delete('range')
      parsedUrl.searchParams.set('_start', String(start))
      parsedUrl.searchParams.set('_end', String(end + 1))
    } catch {
      // Leave original params as-is if parsing fails.
    }
  }

  if (filterParam) {
    try {
      const filter = JSON.parse(filterParam) as Record<string, unknown>
      parsedUrl.searchParams.delete('filter')

      for (const [key, value] of Object.entries(filter)) {
        if (value == null || value === '') continue

        if (Array.isArray(value)) {
          for (const item of value) {
            parsedUrl.searchParams.append(key, String(item))
          }
          continue
        }

        parsedUrl.searchParams.set(key, String(value))
      }
    } catch {
      // Leave original params as-is if parsing fails.
    }
  }

  return fetchUtils.fetchJson(parsedUrl.toString(), options)
}

export const dataProvider = simpleRestProvider(
  'http://localhost:3001',
  jsonServerHttpClient,
  'X-Total-Count',
)
