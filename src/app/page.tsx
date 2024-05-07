import { ContainerApplications } from '@/components/applications/container-applications'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

const Page = () => {
  return (
    <>
      <Header />
      <main
        className='my-7 mx-auto max-w-4xl px-2 lg:px-0'
      >
        <h2
          className="font-black text-4xl lg:text-6xl text-center bg-gradient-principal bg-clip-text text-transparent pb-8"
        >Herramientas digitales</h2>
        <p
          className='text-sm lg:text-base text-text-100'
        >
          Las herramientas digitales son programas o aplicaciones diseñadas para ser utilizadas en dispositivos electrónicos como computadoras, tabletas o teléfonos inteligentes, su propósito es simplificar y mejorar una amplia variedad de tareas y procesos en diferentes campos, incluida la rehabilitación en fisioterapia, estas herramientas ayudan en la recuperación de personas con discapacidades o limitaciones físicas al permitirles realizar actividades de manera más efectiva y accesible. Además, están destinadas a facilitar el trabajo de los profesionales, mejorar el acceso a los datos de los pacientes y permitir un seguimiento más detallado y personalizado de cada caso.
        </p>
        <section
          className='mt-5 mb-20'
        >
          <ContainerApplications />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Page
