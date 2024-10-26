import Image from 'next/image'

export default function PressSection() {
    return (
        <div className="bg-bg-chief py-12 text-center px-6">
            <h2 className="text-2xl font-bold mb-4">On parle de nous</h2>
            <p className="mb-8 text-lg text-gray-600">
                Nos dernières parutions dans la presse et sur internet.
            </p>
            <div className="flex justify-center items-center space-x-8">
                <Image src="/logo-elle.webp" alt="ELLE" width={102} height={45  } />
                <Image src="/logo-lemonde.webp" alt="Le Monde" width={204} height={45} />
                <Image src="/logo-vogue.webp" alt="Vogue" width={106} height={45} />
                <Image src="/logo-cntraveler.webp" alt="Traveler" width={119} height={45} />
                <Image src="/fou-patesserie.webp" alt="Fou de Pâtisserie" width={193} height={45} />
            </div>
        </div>
    )
}
