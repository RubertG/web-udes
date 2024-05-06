import { type AplicationActionReducer, type AplicationStateReducer } from '@/types/types'
import { applications as apps } from '@/data/applications'
import { filterApplications } from '@/utils/filter-applications'

export const reducer = (state: AplicationStateReducer, action: AplicationActionReducer) => {
  if (action.type === 'FILTER') {
    return {
      ...state,
      applications: filterApplications(apps, action.payload)
    }
  }

  return state
}
