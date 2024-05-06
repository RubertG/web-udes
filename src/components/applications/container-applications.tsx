'use client'

import { useReducer } from 'react'
import { CardApplication } from './card-application'
import { Selects } from './selects'
import { reducer } from '@/reducer/applications/reducer'
import { applications } from '@/data/applications'

export const ContainerApplications = () => {
  const [state, dispatch] = useReducer(reducer, { applications })

  return (
    <>
      <Selects dispatch={dispatch} />
      <ul
        className='grid items-start justify-center grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5'
      >
        {
          state.applications.map((app, index) => (
            <li key={index}>
              <CardApplication application={app} />
            </li>
          ))
        }
      </ul>
    </>
  )
}
