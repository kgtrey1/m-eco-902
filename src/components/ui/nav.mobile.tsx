'use client'

import Link from 'next/link';
import { Fragment, useState } from 'react'

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-800 hover:text-gray-600 focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-bg-chief shadow-lg absolute w-full top-[64px] left-0">
                    <div className=" pt-2 pb-3 space-y-1">
                        <Link
                            href="#about"
                            className="block text-gray-800 hover:bg-pastry px-3 py-2"
                        >
                            Le chef
                        </Link>
                        <Link
                            href="#products"
                            className="block text-gray-800 hover:bg-pastry px-3 py-2"
                        >
                            Nos pâtisseries
                        </Link>
                        <Link
                            href="#where-to-find-us"
                            className="block text-gray-800 hover:bg-pastry px-3 py-2"
                        >
                            Où nous trouver
                        </Link>
                        <Link
                            href="#contact"
                            className="block text-gray-800 hover:bg-pastry px-3 py-2"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            )}
        </Fragment>
    )
}