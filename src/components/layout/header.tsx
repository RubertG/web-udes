import React from 'react'
import { IA, Separator } from '../common/icons'

export const Header = () => {
  return (
    <header
      className='bg-gradient-principal relative'
    >
      <section
        className='max-w-4xl mx-auto py-16 lg:py-12 px-2 md:px-0'
      >
        <h1
          className="font-black text-4xl lg:text-6xl text-center text-white"
        >Tecnología y fisioterapia</h1>
        <p
          className='text-center text-sm lg:text-base text-bg-200 mt-6'
        >
          Bienvenido a FisioTec, tu portal especializado en herramientas tecnológicas para la atención en fisioterapia. Aquí encontrarás una recopilación completa y actualizada de los últimos avances tecnológicos en el campo, fruto de un  proyecto de revisión sistemática. Encontrarás información detallada sobre las herramientas tecnológicas más innovadoras: desde apps móviles para ejercicios personalizados hasta dispositivos de realidad virtual para la rehabilitación.
        </p>
        <IA className='w-80 md:w-1/2 mx-auto mt-5' />
      </section>
      <Separator />
    </header>
  )
}
