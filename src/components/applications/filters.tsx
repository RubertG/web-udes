'use client'

import { NAME_ITEMS_SELECT, STAGES, SYSTEMS_CORPORALS } from '@/const/const'
import { Select } from '../common/select'
import { type AplicationActionReducer } from '@/types/types'
import { type FC } from 'react'
import { useSelects } from '@/hooks/useSelects'
import { Searcher } from '../common/searcher'

interface SelectsProps {
  dispatch: (action: AplicationActionReducer) => void
}

export const Filters: FC<SelectsProps> = ({ dispatch }) => {
  const { filterStage, filterSystem, filterByName, inputRef, states } = useSelects({ dispatch })

  return (
    <article
      className='flex flex-wrap md:flex-nowrap gap-2 gap-y-2 md:gap-y-0'
    >
      <Searcher
        filter={filterByName}
        ref={inputRef}
      />
      <Select
        items={Object.values(SYSTEMS_CORPORALS)}
        options={{
          nameItems: NAME_ITEMS_SELECT.SYSTEM,
          textOption: 'Todos los sistemas',
          state: states.system
        }}
        className='min-w-48'
        filter={filterSystem}
      />
      <Select
        items={Object.values(STAGES)}
        options={{
          nameItems: NAME_ITEMS_SELECT.STAGE,
          textOption: 'Todas las etapas',
          state: states.stage
        }}
        className='min-w-44'
        filter={filterStage}
      />
    </article>
  )
}
