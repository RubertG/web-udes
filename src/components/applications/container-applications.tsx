'use client'

import { useReducer } from 'react'
import { CardApplication } from './card-application'
import { Filters } from './filters'
import { reducer } from '@/reducer/applications/reducer'
import { NotFound } from '../common/icons'
import { type AplicationStateReducer } from '@/types/types'

const initialState: AplicationStateReducer = {
  applications: [],
  search: null,
  filters: {
    stage: null,
    system: null
  }
}

export const ContainerApplications = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Filters dispatch={dispatch} />
      {
        (state.search ?? state.filters.stage ?? state.filters.system) && state.applications.length === 0 && (
          <section
            className='text-center text-text-100 mt-5 mb-10 pt-2'
          >
            <NotFound className='mx-auto stroke-accent-200' />
            <p>
              No se encontraron aplicaciones
            </p>
          </section>
        )
      }
      {
        state.applications.length !== 0 && (
          <ul
            className='grid items-start justify-center grid-cols-2 gap-2 md:gap-3 sm:grid-cols-3 md:grid-cols-4 mt-5 mb-10'
          >
            {
              state.applications.map((app, index) => (
                <li key={index}>
                  <CardApplication application={app} />
                </li>
              ))
            }
          </ul>
        )
      }
    </>
  )
}
