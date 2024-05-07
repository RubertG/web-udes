'use client'

import { useReducer } from 'react'
import { CardApplication } from './card-application'
import { Filters } from './filters'
import { reducer } from '@/reducer/applications/reducer'
import { applications } from '@/data/applications'

export const ContainerApplications = () => {
  const [state, dispatch] = useReducer(reducer, { applications })

  return (
    <>
      <Filters dispatch={dispatch} />
      {
        state.applications.length === 0
          ? <p
            className='min-h-[30vh] text-center pt-10 text-text-100 mt-5 mb-10'
          >No hay aplicaciones.</p>
          : (
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
