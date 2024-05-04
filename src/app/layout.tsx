import type { Metadata } from 'next'
import './globals.css'
import { poppins } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'Tecnología y fisioterapia - UDES',
  description: 'La tecnología ha transformado la fisioterapia, ofreciendo nuevas formas de abordar la rehabilitación y el tratamiento de lesiones musculoesqueléticas. Desde dispositivos portátiles de seguimiento hasta realidad virtual, estas herramientas mejoran la precisión, eficacia y experiencia del paciente en la terapia física.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-bg-100`}>{children}</body>
    </html>
  )
}
