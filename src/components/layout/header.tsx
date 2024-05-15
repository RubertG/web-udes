import React from 'react'
import { Separator } from '../common/icons'

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
        >FisioTec</h1>
        <p
          className='text-center text-bg-200 mt-6'
        >
          Bienvenido a FisioTec, tu portal especializado en herramientas tecnológicas para la atención en fisioterapia. Aquí encontrarás una recopilación completa y actualizada de los últimos avances tecnológicos en el campo, fruto de una revisión sistemática. Encontrarás información detallada sobre las herramientas tecnológicas más innovadoras: desde apps móviles para ejercicios personalizados hasta dispositivos de realidad virtual para la rehabilitación.
        </p>
        <img
          className='md:w-[21rem] w-72 m-auto mt-6 mb-7 object-contain gradient-image'
          src="/apps-img/header.png"
          alt="IA y fisioterapia"
        />
      </section>
      <Separator />
    </header>
  )
}
