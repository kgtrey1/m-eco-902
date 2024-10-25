import Image from 'next/image'
import Link from 'next/link'

export default function Location() {
    return (
        <section id="location" className="bg-pastry lg:px-12 mx-6 py-20">
            <h2 className="text-3xl font-bold mb-14">Où nous trouver ?</h2>
            <div className="bg-red flex flex-col md:flex-row md:items-center gap-x-12">
                <Link href="https://www.google.com/maps/d/edit?mid=1vKVot-fGu49zwWXLGjHofY5K5h1QZcY&usp=sharing" target="_blank">
                    <Image 
                        src="/map.webp" 
                        className="rounded-xl object-cover shadow-lg self-center justify-self-center" 
                        height={292}
                        width={402}
                        alt="Map of Offices"
                    />
                </Link>
                <div className="flex flex-col gap-y-4 md:mt-0 mt-6">
                    <div>
                        <p className="font-semibold">Siége Lugnac</p>
                        <Link href="https://www.google.com/maps/dir/?api=1&destination=48.84109,2.35523">
                            <p className="text-gray-600 underline">4 rue Censier, Paris 7</p>
                        </Link>
                    </div>
                    <div>
                        <p className="font-semibold">Aux Prés</p>
                        <Link href="https://www.google.com/maps/dir/?api=1&destination=48.83713,2.35617">
                            <p className="text-gray-600 underline">Boulevard de l’Hôpital, Paris 15</p>
                        </Link>
                    </div>
                    <div>
                        <p className="font-semibold">Le Chardenoux</p>
                        <Link href="https://www.google.com/maps/dir/?api=1&destination=48.83778,2.36019">
                            <p className="text-gray-600 underline">15 rue du Jura, Paris 11</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center mt-16">
                <p className="text-sm text-gray-500">Cliquez sur la carte pour obtenir une carte Google Maps de nos enseignes. Utilisateurs mobile, cliquez sur les addresses pour obtenir un itineraire</p>
            </div>
        </section>
    )
}
