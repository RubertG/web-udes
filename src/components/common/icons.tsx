import { type FC } from 'react'

interface IconProps {
  className?: string
  'aria-hidden'?: boolean
}

interface LoadingProps extends IconProps {
  loading: boolean
  color?: string
}

export const Separator: FC<IconProps> = ({ className = '' }) => {
  return (
    <div className="translate-y-1">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={`fill-bg-100 ${className}`}>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
      </svg>
    </div>
  )
}

export const ExternalLink: FC<IconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-external-link inline-block ${className}`}width="14" height="14" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#006cb0" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
      <path d="M11 13l9 -9" />
      <path d="M15 4h5v5" />
    </svg>
  )
}

export const Loading: FC<LoadingProps> = ({ className = '', loading = true, color = 'currentColor' }) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className={`${className} transition-opacity ${loading ? 'opacity-100' : 'opacity-0'}`}><path fill="none" stroke={color} strokeWidth="15" strokeLinecap="round" strokeDasharray="300 385" strokeDashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
  )
}

export const NotFound: FC<IconProps> = ({ className = '', 'aria-hidden': ariaHidden = true }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-error-404 ${className}`}><path stroke="none" d="M0 0h24v24H0z" fill="none" aria-hidden={ariaHidden} /><path d="M3 7v4a1 1 0 0 0 1 1h3" /><path d="M7 7v10" /><path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" /><path d="M17 7v4a1 1 0 0 0 1 1h3" /><path d="M21 7v10" /></svg>
  )
}

export const Check: FC<IconProps> = ({ className = '', 'aria-hidden': ariaHidden = true }) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden={ariaHidden}
      >
        <path
          fillRule="evenodd"
          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
          clipRule="evenodd"
        />
      </svg>
  )
}

export const ChevronUpDown: FC<IconProps> = ({ className = '', 'aria-hidden': ariaHidden = true }) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
        aria-hidden={ariaHidden}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
        />
      </svg>
  )
}

export const MagnifyingGlass: FC<LoadingProps> = ({ className = '', loading = false }) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-search ${className} transition-opacity ${!loading ? 'opacity-100' : 'opacity-0'}`}
        width="100"
        height="100"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#006cb0"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
  )
}
