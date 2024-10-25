import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col items-center justify-center py-10 gap-y-8">
                <h3 className="font-bold text-2xl">Retrouvez-nous</h3>
                <div className="flex flex-row gap-x-6">
                    <Link href="https://instagram.com">
                        <Image src="/instagram.svg" height={33} width={33} alt="Rejoignez nous sur instagram" />
                    </Link>
                    <Link href="https://linkedin.com">
                        <Image src="/linkedin.svg" height={33} width={33} alt="Rejoignez nous sur instagram" />
                    </Link>
                    <Link href="https://facebook.com">
                        <Image src="/facebook.svg" height={33} width={33} alt="Rejoignez nous sur instagram" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-row py-3 bg-bg-chief justify-between lg:px-16 px-12">
                <p className="">
                    Mentions légales
                </p>
            </div>
        </footer>
    )
}