import { type Stage, type SystemCorporal, type AplicationActionReducer } from '@/types/types'
import { useSearchParams, useRouter } from 'next/navigation'

interface SelectsProps {
  dispatch: (action: AplicationActionReducer) => void
}

export const useSelects = ({ dispatch }: SelectsProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stage = searchParams.get('etapa')
  const system = searchParams.get('sistema')

  const filterSystem = (newSystem: string | null) => {
    if (newSystem === system) return
    const newSearchParams = new URLSearchParams({
      ...(newSystem ? { sistema: newSystem } : {}),
      ...(stage ? { etapa: stage } : {})
    })

    dispatch({
      type: 'FILTER',
      payload: {
        stage: stage ? stage as Stage : null,
        system: newSystem ? newSystem as SystemCorporal : null
      }
    })

    router.push(`?${newSearchParams.toString()}`, { scroll: false })
  }

  const filterStage = (newStage: string | null) => {
    if (newStage === stage) return

    const newSearchParams = new URLSearchParams({
      ...(system ? { sistema: system } : {}),
      ...(newStage ? { etapa: newStage } : {})
    })

    dispatch({
      type: 'FILTER',
      payload: {
        system: system ? system as SystemCorporal : null,
        stage: newStage ? newStage as Stage : null
      }
    })

    router.push(`?${newSearchParams.toString()}`, { scroll: false })
  }

  return {
    system,
    stage,
    filterSystem,
    filterStage
  }
}
