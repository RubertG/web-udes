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
  ESTUDENTS: 'estudiantes universitarios o posgraduados profesionalmente calificados'
} as const

// Sistemas corporales
export const SYSTEMS_CORPORALS = {
  MUSCULOSKELETAL: 'musculoesqueletico',
  CARDIOVASCULAR: 'cardiovascular',
  CARDIOPULMONARY: 'cardiopulmonar',
  DIGESTIVE: 'digestivo',
  URINARY: 'urinario',
  INMUNE: 'inmunitario',
  NEUROLOGICAL: 'neurológico',
  NERVOUS: 'nervioso',
  SENSORIAL: 'sensorial',
  NEUROMOTOR: 'neuromotor',
  ENDOCRINE: 'endocrino',
  CARDIORESPIRATORY: 'cardiorespiratorio',
  VESTIBULAR: 'vestibular',
  NERVOUS_CENTRAL: 'nervioso central'
} as const

export const NAME_ITEMS_SELECT = {
  SYSTEM: 'sistema',
  STAGE: 'etapa'
} as const
