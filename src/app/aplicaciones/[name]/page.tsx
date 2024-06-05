import { Main } from '@/components/application/main'
import { Nav } from '@/components/application/nav'
import { SeparatorSection } from '@/components/common/separator-section'
import { applications } from '@/data/applications'
import { firstLetterCapitalized } from '@/utils/first-letter-capitalized'
import { Error } from '@/components/layout/error'
import { type FC } from 'react'
import { type Metadata } from 'next'

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

export const generateMetadata = ({ params }: Props): Metadata => {
  const post = applications.find(({ name }) => name.toLocaleLowerCase().replaceAll(' ', '-') === params.name)
  return {
    title: (post != null) ? `${firstLetterCapitalized(post.name)} - ${firstLetterCapitalized(post.technology)}` : 'No se encontró la página',
    description: post?.description,
    metadataBase: new URL('https://digi-care-physio.vercel.app/'),
    keywords: 'Fisioterapia, IA, UDES, App, Mobile, Web',
    openGraph: {
      title: (post != null) ? `${firstLetterCapitalized(post.name)} - ${firstLetterCapitalized(post.technology)}` : 'No se encontró la página',
      description: post?.description,
      images: '/apps-img/' + post?.image,
      type: 'website',
      url: 'https://digi-care-physio.vercel.app/' + params.name
    }
  }
}

const PageApplication: FC<Props> = ({ params: { name: nameParam } }) => {
  const app = applications.find(
    (app) => app.name.toLocaleLowerCase().replaceAll(' ', '-') === decodeURIComponent(nameParam)
  )

  if (app == null) {
    return <Error />
  }

  const { image, name, technology, ...otherProperties } = app

  return (
    <>
      <Nav />
      <header
        className='max-w-4xl mx-auto mt-10 px-2 lg:px-0 flex flex-col md:flex-row justify-between items-center'
      >
        <div>
          <h2
            className='font-black text-4xl md:text-[2.4rem] bg-gradient-principal bg-clip-text text-transparent text-center md:text-left pb-1'
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
      <div
        className='mx-auto max-w-4xl px-2 lg:px-0'
      >
        <SeparatorSection />
      </div>
      <Main {...otherProperties} />
    </>
  )
}

export default PageApplication
