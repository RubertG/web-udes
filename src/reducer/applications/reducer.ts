import { type AplicationActionReducer, type AplicationStateReducer } from '@/types/types'
import { applications as apps } from '@/data/applications'

export const reducer = (state: AplicationStateReducer, action: AplicationActionReducer) => {
  if (action.type === 'RESET') {
    return {
      ...state,
      applications: apps
    }
  }

  if (action.type === 'FILTER_BY_SYSTEM_CORPORAL') {
    return {
      ...state,
      applications: apps.filter(app => app.systemsCorporals.includes(action.payload))
    }
  }

  if (action.type === 'FILTER_BY_STAGE') {
    return {
      ...state,
      applications: apps.filter(app => app.stage.includes(action.payload))
    }
  }

  return state
}
