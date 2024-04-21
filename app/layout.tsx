import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Image from "next/image";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'GMadrid Natación App',
    description: 'Aplicación móvil para mantenerse informades sobre la actividad del grupo de natación de GMadrid. Entrenos, calendario, estado de las piscinas, etc. Disponible para Android e iOS.',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
        <body className={`${inter.className} bg-gray-100`}>
        {children}
        <div className="lg:fixed bottom-0 left-0 flex h-25 w-full bg-slate-50/70 justify-center flex items-center">
            <a
                className="inline-flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-4 min-w-min flex-grow-1"
                href="https://www.bertamini.net"
            >
                <Image
                    src="https://www.bertamini.net/smiley-face.svg"
                    alt="Vercel Logo"
                    className="white:invert"
                    width={24}
                    height={24}
                    priority
                />
                bertamini.net
            </a>
            <a className="ineline-flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-4 flex-grow-0"
               href="https://www.buymeacoffee.com/bertuz"><img width={200} height={50}
                src="https://img.buymeacoffee.com/button-api/?text=Invítame a una cerve&emoji=🍺&slug=bertuz&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"/></a>
        </div>
        </body>
        </html>
    )
}
