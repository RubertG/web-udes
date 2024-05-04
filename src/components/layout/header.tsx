import React from 'react'
import { IA, Separator } from '../common/icons'

export const Header = () => {
  return (
    <header
      className='bg-gradient-principal relative'
    >
      <section
        className='max-w-4xl mx-auto py-16 px-2 md:px-0'
      >
        <h1
          className="font-black text-4xl lg:text-6xl text-center text-white"
        >Tecnología y fisioterapia</h1>
        <p
          className='text-center text-sm lg:text-base text-bg-200 mt-6'
        >
          La tecnología ha transformado la fisioterapia, ofreciendo nuevas formas de abordar la rehabilitación y el tratamiento de lesiones musculoesqueléticas. Desde dispositivos portátiles de seguimiento hasta realidad virtual, estas herramientas mejoran la precisión, eficacia y experiencia del paciente en la terapia física.
        </p>
        <IA className='w-80 md:w-1/2 mx-auto mt-5' />
      </section>
      <Separator />
    </header>
  )
}
