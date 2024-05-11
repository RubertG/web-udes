import { Main } from '@/components/application/main'
import { Nav } from '@/components/application/nav'
import { applications } from '@/data/applications'
import { firstLetterCapitalized } from '@/utils/first-letter-capitalized'
import { type FC } from 'react'

export const generateStaticParams = () => {
  return applications.map(({ name }) => ({
    name: name.toLocaleLowerCase().replaceAll(' ', '-')
  })
  )
}

interface Props {
  params: {
    name: string
  }
}

interface Metadata {
  title: string | undefined
  description: string | undefined
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const post = applications.find(({ name }) => name.toLocaleLowerCase().replaceAll(' ', '-') === params.name)
  return {
    title: (post != null) ? `${post.name} - ${post.technology}` : 'Página no encontrada',
    description: post?.description
  }
}

const PageApplication: FC<Props> = ({ params: { name: nameParam } }) => {
  const app = applications.find(
    (app) => app.name.toLocaleLowerCase().replaceAll(' ', '-') === decodeURIComponent(nameParam)
  )

  if (app == null) return <main>Página no encontrada</main>

  const { image, name, technology, ...otherProperties } = app

  return (
    <>
      <Nav />
      <header
        className='max-w-4xl mx-auto mt-10 px-2 lg:px-0 flex flex-col md:flex-row justify-between items-center'
      >
        <div>
          <h2
            className='font-black text-4xl md:text-[2.4rem] bg-gradient-principal bg-clip-text text-transparent text-center md:text-left'
          >{firstLetterCapitalized(name)}</h2>
          <p
            className='text-text-200 mt-1.5 text-center md:text-left'
          >{firstLetterCapitalized(technology)}</p>
        </div>
        <picture
          className='rounded-lg md:max-w-48 max-w-72 w-full overflow-hidden mt-5 md:mt-0'
        >
          <img
            src={`/apps-img/${image}`}
            alt={`Imagen referente a ${name}`}
            loading='lazy'
            className='w-full h-full rounded-lg'
          />
        </picture>
      </header>
      <Main {...otherProperties}/>
    </>
  )
}

export default PageApplication
