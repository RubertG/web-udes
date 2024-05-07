import { type SYSTEMS_CORPORALS, type STAGES, type USABILITY, type NAME_ITEMS_SELECT } from '@/const/const'

export type Stage = typeof STAGES[keyof typeof STAGES]
export type Usability = typeof USABILITY[keyof typeof USABILITY]
export type SystemCorporal = typeof SYSTEMS_CORPORALS[keyof typeof SYSTEMS_CORPORALS]

export type NameItemsSelected = typeof NAME_ITEMS_SELECT[keyof typeof NAME_ITEMS_SELECT]

export interface Urls {
  name: string
  url: string
}

export interface Application {
  name: string // nombre de la aplicacion
  description: string // descripcion de la aplicacion
  technology: string // tipo de tecnologia de la aplicacion
  stage: Stage[] // etapa de uso de la aplicacion
  usability: Usability[] // usabilidad de la aplicacion
  accessibility: string // accesibilidad de la aplicacion
  mode?: string // modo de uso de la aplicacion
  systemsCorporals: SystemCorporal[] // sistemas corporales de la aplicacion
  barriers: string // barreras de uso de la aplicacion
  urls: Urls[] // url para mas informacion de la aplicacion
  linksInfoApp?: Urls[] // informacion de la aplicacion
  image: string // imagen de la aplicacion
}

export interface StateSelects {
  stage: Stage | null
  system: SystemCorporal | null
}

export interface OptionsSelect {
  nameItems: NameItemsSelected
  textOption: string
  state: string | null
}

export interface AplicationStateReducer {
  applications: Application[]
}

export type AplicationActionReducer = { type: 'FILTER', payload: { stage: Stage | null, system: SystemCorporal | null } }
| { type: 'RESET' }
| { type: 'FILTER_BY_NAME', payload: string }
