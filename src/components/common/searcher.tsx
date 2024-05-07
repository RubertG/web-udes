'use client'

import { useDebounce } from '@react-hooks-hub/use-debounce'
import { type ChangeEvent, useState, forwardRef, type ForwardedRef } from 'react'
import { Loading, MagnifyingGlass } from './icons'

interface SearcherProps {
  filter: (text: string) => void
}

export const Searcher = forwardRef(function Searcher ({ filter }: SearcherProps, ref: ForwardedRef<HTMLInputElement>) {
  const [loading, setLoading] = useState(false)

  const debounce = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    filter(e.target.value)
    setLoading(false)
  }, 300)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    debounce(e)
  }

  return (
    <search
      className='flex items-center justify-between gap-2 w-full rounded-lg border-2 border-gray-200 bg-bg-100 px-3 text-sm text-text-100 shadow-principal'
    >
      <input
        ref={ref}
        type="text"
        placeholder="Buscar por nombre..."
        className='w-full focus:outline-none py-2'
        onChange={onChange} />
      <div
        className='relative w-7 h-full'
      >
        <Loading
          loading={loading}
          color='#006cb0'
          className='w-7 h-4 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'
        />
        <MagnifyingGlass
          className='w-6 h-6 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'
          loading={loading}
        />
      </div>
    </search>
  )
})
