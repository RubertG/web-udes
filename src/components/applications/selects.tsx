'use client'

import { NAME_ITEMS_SELECT, STAGES, SYSTEMS_CORPORALS } from '@/const/const'
import { Select } from '../common/select'
import { type AplicationActionReducer } from '@/types/types'
import { type FC } from 'react'
import { useSelects } from '@/hooks/useSelects'

interface SelectsProps {
  dispatch: (action: AplicationActionReducer) => void
}

export const Selects: FC<SelectsProps> = ({ dispatch }) => {
  const { filterStage, filterSystem, stage, system } = useSelects({ dispatch })

  return (
    <article
      className='flex flex-wrap gap-3 gap-y-1'
    >
      <Select
        items={Object.values(SYSTEMS_CORPORALS)}
        options={{
          nameItems: NAME_ITEMS_SELECT.SYSTEM,
          textOption: 'Todos los sistemas',
          defaultName: system
        }}
        className='w-52'
        filter={filterSystem}
      />
      <Select
        items={Object.values(STAGES)}
        options={{
          nameItems: NAME_ITEMS_SELECT.STAGE,
          textOption: 'Todas las etapas',
          defaultName: stage
        }}
        className='w-48'
        filter={filterStage}
      />
    </article>
  )
}
