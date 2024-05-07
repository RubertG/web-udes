import { applications } from '@/data/applications'
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

const PageApplication: FC<Props> = ({ params: { name } }) => {
  const app = applications.find((app) => app.name.toLocaleLowerCase().replaceAll(' ', '-') === name)

  if (app == null) return <main>Página no encontrada</main>

  return (
    <>
      {app.name}
    </>
  )
}

export default PageApplication
