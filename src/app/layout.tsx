import type { Metadata } from 'next'
import './globals.css'
import { poppins } from '@/fonts/fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://digi-care-physio.vercel.app/'),
  title: 'DigiCare Physio',
  description: 'Bienvenido a DigiCare Physio, tu portal especializado en herramientas tecnológicas para la atención en fisioterapia. Aquí encontrarás una recopilación completa y actualizada de los últimos avances tecnológicos en el campo, fruto de un  proyecto de revisión sistemática. Encontrarás información detallada sobre las herramientas tecnológicas más innovadoras: desde apps móviles para ejercicios personalizados hasta dispositivos de realidad virtual para la rehabilitación.',
  keywords: 'Fisioterapia, IA, UDES, App, Mobile, Web',
  openGraph: {
    title: 'DigiCare Physio',
    description: 'Bienvenido a DigiCare Physio, tu portal especializado en herramientas tecnológicas para la atención en fisioterapia.',
    images: '/favicon.webp',
    type: 'website',
    url: 'https://digi-care-physio.vercel.app/',
    siteName: 'DigiCare Physio'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/favicon.webp" />
      </head>
      <body className={`${poppins.className} bg-bg-100`}>
        {children}
      </body>
    </html>
  )
}
