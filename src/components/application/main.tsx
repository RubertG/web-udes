import { type Application } from '@/types/types'
import { ExternalLink } from '../common/icons'
import { Section } from './section'
import { type FC } from 'react'
import { listToString } from '@/utils/list-to-string'
import { firstLetterCapitalizedHtml } from '@/utils/first-letter-capitalized'

type Props = Pick<Application, 'accessibility' | 'barriers' | 'description' | 'stage' | 'systemsCorporals' | 'urls' | 'usability' | 'mode' | 'linksInfoApp'>

export const Main: FC<Props> = ({
  accessibility, barriers, description, stage, systemsCorporals, urls, usability, mode, linksInfoApp
}) => {
  return (
    <main
      className='mx-auto max-w-4xl px-2 lg:px-0 mb-24'
    >
      <Section content={description} title='Descripción'>
        <article
          className='text-text-100 container-text'
          dangerouslySetInnerHTML={{ __html: description ? firstLetterCapitalizedHtml(description) : '' }}
        />
        <ul
          className='list-disc list-inside ml-4 text-text-100 pt-2'
        >
          <li>
            <strong>Etapas de uso:</strong> {listToString(stage)}.
          </li>
          <li className='mt-0.5'>
            <strong>Usabilidad:</strong> {listToString(usability)}.
          </li>
          <li className='mt-0.5'>
            <strong>Sistemas corporales:</strong> {listToString(systemsCorporals)}.
          </li>
        </ul>
      </Section>
      <hr
        className='border-none outline-none h-[2px] bg-gray-200 my-10 rounded-lg'
      />
      <Section content={accessibility} title='Accesibilidad' />
      <hr
        className='border-none outline-none h-[2px] bg-gray-200 my-10 rounded-lg'
      />
      {
        mode && (
          <>
            <Section
              content={mode}
              title='Modo de uso'
            />
            <hr
              className='border-none outline-none h-[2px] bg-gray-200 my-10 rounded-lg'
            />
          </>
        )
      }
      <Section content={barriers} title='Barreras para el uso' />
      <hr
        className='border-none outline-none h-[2px] bg-gray-200 my-10 rounded-lg'
      />
      <Section
        title='Enlaces relacionados'
      >
        <ul
          className='list-disc list-inside ml-4 text-text-100 pt-2'
        >
          {
            urls.map(({ name, url }, index) => (
              <li key={index}
                className='mt-1 first:mt-0'
              >
                <a
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-primary-100 transition-all group'
                >
                  {name} <ExternalLink className='-mt-[2.2px] stroke-text-100 group-hover:stroke-primary-100 transition-all' />
                </a>
              </li>
            ))
          }
          {
            linksInfoApp?.map(({ name, url }, index) => (
              <li key={index}
                className='mt-1'
              >
                <a
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-primary-100 transition-all group'
                >
                  {name} <ExternalLink className='-mt-[2.2px] stroke-text-100 group-hover:stroke-primary-100 transition-all' />
                </a>
              </li>
            ))
          }
        </ul>
      </Section>
    </main>
  )
}
