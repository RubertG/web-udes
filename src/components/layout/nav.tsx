import Link from 'next/link'

export const Nav = () => {
  return (
    <nav
      className='bg-gradient-principal px-3 lg:px-5 py-3'
    >
      <nav
        className='max-w-4xl mx-auto flex justify-between'
      >
        <Link
          href="/"
          className='text-xl lg:text-2xl font-bold text-slate-100'
        >FisioTec</Link>
        <Link
          href="/"
          className='hover:bg-accent-200 text-slate-100 px-4 py-1 transition-colors rounded-lg font-medium'
          title="Ir a la página de inicio"
        >Inicio</Link>
      </nav>
    </nav>
  )
}
