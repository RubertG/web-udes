import Link from 'next/link'
import React from 'react'

export const Error = () => {
  return (
    <main
      className='max-w-4xl mx-auto mt-10 px-2 lg:px-0 min-h-[84vh] flex justify-center items-center flex-col gap-3'
    >
      <p
        className='text-text-100 text-center'
      >No se encontró la página.</p>
      <Link
        href="/"
        className='text-bg-100 hover:text-bg-200 hover:bg-[#007fcf] bg-accent-200 px-4 py-1.5 rounded-lg transition-colors'
      >Ir a la página de inicio</Link>
    </main>
  )
}
