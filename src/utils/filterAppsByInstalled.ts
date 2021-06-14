import appExists from 'app-exists'
import pFilter from 'p-filter'

import type { App } from '../shared-state/apps.reducer'

/**
 * Finds installed whitelisted apps.
 */
export function filterAppsByInstalled(apps: App[]): Promise<App[]> {
  return pFilter(apps, (app) => appExists(app.id))
}
