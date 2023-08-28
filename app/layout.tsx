import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GMadrid Natación App',
  description: 'Aplicación móvil para mantenerse informades sobre la actividad del grupo de natación de GMadrid. Entrenos, calendario, estado de las piscinas, etc. Disponible para Android e iOS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
    </html>
  )
}
