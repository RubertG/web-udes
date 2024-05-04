'use client'

import { NAME_ITEMS_SELECT, STAGES, SYSTEMS_CORPORALS } from '@/const/const'
import { Select } from '../common/select'
import { type SystemCorporal, type AplicationActionReducer, type Stage } from '@/types/types'
import { type FC } from 'react'

interface SelectsProps {
  dispatch: (action: AplicationActionReducer) => void
}

export const Selects: FC<SelectsProps> = ({ dispatch }) => {
  return (
    <article
      className='flex flex-wrap gap-3 gap-y-1'
    >
      <Select
        items={Object.values(SYSTEMS_CORPORALS)}
        options={{
          nameItems: NAME_ITEMS_SELECT.SYSTEM,
          textOption: 'Todos los sistemas'
        }}
        className='w-52'
        filter={system => {
          if (!system) { dispatch({ type: 'RESET' }); return }
          dispatch({ type: 'FILTER_BY_SYSTEM_CORPORAL', payload: system as SystemCorporal })
        }}
      />
      <Select
        items={Object.values(STAGES)}
        options={{
          nameItems: NAME_ITEMS_SELECT.STAGE,
          textOption: 'Todas las etapas'
        }}
        className='w-48'
        filter={stage => {
          if (!stage) { dispatch({ type: 'RESET' }); return }
          dispatch({ type: 'FILTER_BY_STAGE', payload: stage as Stage })
        }}
      />
    </article>
  )
}
