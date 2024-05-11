import { type ReactNode, type FC } from 'react'

interface SectionProps {
  content?: string
  title: string
  children?: ReactNode
}

export const Section: FC<SectionProps> = ({ content, title, children }) => {
  return (
    <section
      className='my-7'
    >
      <h2
        className="font-black text-3xl md:text-4xl bg-gradient-principal bg-clip-text text-transparent mb-5"
      >{title}</h2>
      {
        children ?? (
          <article
            className='text-text-100 container-text'
            dangerouslySetInnerHTML={{ __html: content ?? '' }}
          />
        )
      }
    </section>
  )
}
