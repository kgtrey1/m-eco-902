import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './globals.css'
 
const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Philippe Lugnac - Maître pâtissier",
    description: "Bienvenue sur le site de Phillipe Lugnac [...]",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body className={`${roboto.className} antialiased max-h-screen bg-pastry`}>
                {children}
            </body>
        </html>
    )
}
