import { type Stage, type SystemCorporal, type Application } from '@/types/types'

export const filterApplications = (applications: Application[], { stage, system }: { stage: Stage | null, system: SystemCorporal | null }) => {
  return applications.filter(({ stage: s, systemsCorporals }) => {
    if (system != null && !systemsCorporals.includes(system)) {
      return false
    }

    if (stage != null && !s.includes(stage)) {
      return false
    }

    return true
  })
}
