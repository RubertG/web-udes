import { type AplicationActionReducer, type AplicationStateReducer } from '@/types/types'
import { applications as apps } from '@/data/applications'
import { filterApplications } from '@/utils/filter-applications'

export const reducer = (state: AplicationStateReducer, action: AplicationActionReducer) => {
  if (action.type === 'FILTER') {
    return {
      ...state,
      filters: action.payload,
      applications: filterApplications(apps, action.payload)
    }
  }

  if (action.type === 'RESET') {
    return {
      ...state,
      search: null,
      filters: {
        stage: null,
        system: null
      },
      applications: apps
    }
  }

  if (action.type === 'FILTER_BY_NAME') {
    return {
      ...state,
      filters: {
        stage: null,
        system: null
      },
      search: action.payload,
      applications: apps.filter(app => app.name.toLowerCase().includes(action.payload.toLowerCase()))
    }
  }

  return state
}
