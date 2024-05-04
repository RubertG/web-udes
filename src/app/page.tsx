import { ContainerApplications } from '@/components/applications/container-applications'
import { Header } from '@/components/layout/header'

const Page = () => {
  return (
    <>
      <Header />
      <main
        className='my-7 mx-auto max-w-4xl px-2 md:px-0'
      >
        <h2
          className="font-black text-4xl lg:text-6xl text-center bg-gradient-principal bg-clip-text text-transparent"
        >Herramientas</h2>
        <p
          className='text-sm lg:text-base text-text-100 mt-6'
        >
          En fisioterapia, diversas tecnologías y aplicaciones se clasifican según el sistema corporal abordado o la etapa del tratamiento. Algunas se centran en el sistema musculoesquelético con ejercicios de rehabilitación, otras en el sistema nervioso con estimulación neuromuscular. Las aplicaciones varían por etapas como son la etapa de desarrollo, implementación, investigación o mantenimiento.
        </p>
        <section
          className='my-5'
        >
          <ContainerApplications />
        </section>
      </main>
    </>
  )
}

export default Page
