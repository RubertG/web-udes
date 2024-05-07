import { type Stage, type SystemCorporal, type AplicationActionReducer, type StateSelects } from '@/types/types'
import { useRef, useState } from 'react'

interface SelectsProps {
  dispatch: (action: AplicationActionReducer) => void
}

export const useSelects = ({ dispatch }: SelectsProps) => {
  const [states, setStates] = useState<StateSelects>({
    stage: null,
    system: null
  })
  const inputRef = useRef<HTMLInputElement>(null)

  const filterSystem = (newSystem: string | null) => {
    setStates({
      ...states,
      system: newSystem ? newSystem as SystemCorporal : null
    })

    if (inputRef.current) inputRef.current.value = ''

    dispatch({
      type: 'FILTER',
      payload: {
        stage: states.stage ?? null,
        system: newSystem ? newSystem as SystemCorporal : null
      }
    })
  }

  const filterStage = (newStage: string | null) => {
    setStates({
      ...states,
      stage: newStage ? newStage as Stage : null
    })

    if (inputRef.current) inputRef.current.value = ''

    dispatch({
      type: 'FILTER',
      payload: {
        system: states.system ?? null,
        stage: newStage ? newStage as Stage : null
      }
    })
  }

  const filterByName = (name: string) => {
    setStates({
      ...states,
      stage: null,
      system: null
    })
    dispatch({
      type: 'FILTER_BY_NAME',
      payload: name
    })
  }

  return {
    filterSystem,
    filterStage,
    filterByName,
    states,
    inputRef
  }
}
