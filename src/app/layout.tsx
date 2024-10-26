import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
    title: "Philippe Lugnac - Maître pâtissier",
    description: "Bienvenue sur le site de Phillipe Lugnac [...]",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body className={`antialiased max-h-screen bg-pastry`}>
                {children}
            </body>
        </html>
    )
}
