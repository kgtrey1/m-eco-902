import Link from 'next/link'
import Image from 'next/image'
import MobileNav from '@/components/ui/nav.mobile'

export default function Navbar() {
    return (
        <header className="bg-bg-chief shadow-xs w-full">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                <div className="flex items-center md:justify-start justify-between h-16">
                    <div className="flex-shrink-0 flex items-center space-x-4">
                        <Link href="/">
                            <Image
                                width={48}
                                height={31}
                                src="/logo.webp"
                                alt="Logo"
                            />
                        </Link>
                        <p className="font-script text-xl font-bold">Philippe Lugnac</p>
                    </div>
                    <div className="hidden md:flex space-x-4 lg:ml-20 ml-10 font-semibold">
                        <Link href="#about" className="text-gray-800 hover:text-gray-600">
                            Le chef
                        </Link>
                        <Link href="#products" className="text-gray-800 hover:text-gray-600">
                            Nos pâtisseries
                        </Link>
                        <Link href="#where-to-find-us" className="text-gray-800 hover:text-gray-600">
                            Où nous trouver
                        </Link>
                        <Link href="#contact" className="text-gray-800 hover:text-gray-600">
                            Nous contacter
                        </Link>
                    </div>
                    <MobileNav />
                </div>
            </nav>
        </header>
    )
}
