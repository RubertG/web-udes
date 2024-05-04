import { type Application, type SearchParamsApplication } from '@/types/types'

export const filterApplications = (applications: Application[], { etapa, sistema }: SearchParamsApplication) => {
  return applications.filter(({ stage, systemsCorporals }) => {
    if (sistema != null && !systemsCorporals.includes(sistema)) {
      return false
    }

    if (etapa != null && !stage.includes(etapa)) {
      return false
    }

    return true
  })
}
