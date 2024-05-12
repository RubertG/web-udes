import React, { type FC } from 'react'

interface SeparatorSectionProps {
  className?: string
}

export const SeparatorSection: FC<SeparatorSectionProps> = ({ className = '' }) => {
  return (
    <hr
      className={`border-none outline-none h-[2px] bg-slate-200 my-10 rounded-lg ${className}`}
    />
  )
}
