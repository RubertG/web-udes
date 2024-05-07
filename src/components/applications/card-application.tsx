import { type Application } from '@/types/types'
import { firstLetterCapitalized } from '@/utils/first-letter-capitalized'
import Link from 'next/link'
import { type FC } from 'react'

interface CardApplicationProps {
  application: Application
}

export const CardApplication: FC<CardApplicationProps> = ({ application: { name, image } }) => {
  const nameRef = name.toLocaleLowerCase().replaceAll(' ', '-')
  name = firstLetterCapitalized(name)

  return (
    <Link
      href={`/applications/${nameRef}`}
      title={`Ir a la página de ${name}`}
      className='block rounded-lg shadow-principal overflow-hidden p-3 bg-bg-100 border border-gray-200 hover:scale-105 transition-all'
    >
      <picture
        className='rounded-lg min-w-[9rem] lg:min-h-[10rem] overflow-hidden'
      >
        <img
          src={`apps-img/${image}`}
          alt={`Imagen referente a ${name}`}
          loading='lazy'
          className='w-full min-w-[9rem] lg:min-h-[10rem] h-full rounded-lg'
        />
      </picture>
      <h3
        className='text-center font-medium text-sm text-text-100 mt-3'
      >{name}</h3>
    </Link>
  )
}
