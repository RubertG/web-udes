import { type SYSTEMS_CORPORALS, type STAGES, type USABILITY, type NAME_ITEMS_SELECT } from '@/const/const'

export type Stage = typeof STAGES[keyof typeof STAGES]
export type Usability = typeof USABILITY[keyof typeof USABILITY]
export type SystemCorporal = typeof SYSTEMS_CORPORALS[keyof typeof SYSTEMS_CORPORALS]

export type NameItemsSelected = typeof NAME_ITEMS_SELECT[keyof typeof NAME_ITEMS_SELECT]

export interface Application {
  name: string // nombre de la aplicacion
  title: string // titulo de la aplicacion
  summary: string // resumen de la aplicacion
  technology: string // tipo de tecnologia de la aplicacion
  stage: Stage[] // etapa de uso de la aplicacion
  usability: Usability[] // usabilidad de la aplicacion
  accessibility: string // accesibilidad de la aplicacion
  mode: string // modo de uso de la aplicacion
  systemsCorporals: SystemCorporal[] // sistemas corporales de la aplicacion
  barriers: string // barreras de uso de la aplicacion
  url: string // url para mas informacion de la aplicacion
  image: string // imagen de la aplicacion
}

export interface OptionsSelect {
  nameItems: NameItemsSelected
  textOption: string
}

export interface AplicationStateReducer {
  applications: Application[]
}

export type AplicationActionReducer = { type: 'FILTER_BY_SYSTEM_CORPORAL', payload: SystemCorporal }
| { type: 'FILTER_BY_STAGE', payload: Stage }
| { type: 'RESET' }
