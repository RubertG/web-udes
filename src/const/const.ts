// Etapa de uso de la aplicación
export const STAGES = {
  DEVELOPMENT: 'desarrollo',
  IMPLEMENTATION: 'implementación',
  INVESTIGATION: 'investigación',
  MAINTENANCE: 'mantenimiento'
} as const

// Quienes pueden usar la aplicación
export const USABILITY = {
  THERAPIST: 'fisioterapeutas',
  PATIENT: 'pacientes',
  USERS: 'usuarios',
  INVESTIGATORS: 'investigadores',
  ESTUDENTS: 'estudiantes universitarios o profesionales calificados'
} as const

// Sistemas corporales
export const SYSTEMS_CORPORALS = {
  MUSCULOSKELETAL: 'musculoesquelético',
  CARDIOVASCULAR: 'cardiovascular',
  DIGESTIVE: 'digestivo',
  URINARY: 'urinario',
  NEUROLOGICAL: 'neurológico',
  NERVOUS: 'nervioso',
  SENSORIAL: 'sensorial',
  CARDIORESPIRATORY: 'cardiorrespiratorio',
  VESTIBULAR: 'vestibular',
  NERVOUS_CENTRAL: 'nervioso central'
} as const

export const NAME_ITEMS_SELECT = {
  SYSTEM: 'sistema',
  STAGE: 'etapa'
} as const
