import Image from "next/image"
import Link from "next/link"

export default function Location() {
    return (
        <div className="bg-pastry">
            <div className="mx-auto flex max-w-7xl flex-col gap-x-8 px-6 lg:px-8 xl:flex-col items-stretch lg:pb-[50px] pt-20 pb-20">
                <h2 className="text-2xl font-bold mb-14">Où nous trouver ?</h2>
                <div className="flex flex-col md:flex-row justify-around items-center gap-6">
                    <div className="relative w-full md:max-w-[400px] lg:max-w-xs sm:max-w-[300px] aspect-[1372/1000] lg:min-h-[300px] sm:self-center">
                        <Link href="https://www.google.com/maps/d/edit?mid=1vKVot-fGu49zwWXLGjHofY5K5h1QZcY&usp=sharing" target="_blank">
                            <Image 
                                src="/map.webp" 
                                className="rounded-xl object-cover shadow-lg" 
                                fill
                                alt="Map of Offices"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-6 text-left sm:text-left">
                        <div>
                            <p className="font-semibold">Lugnac</p>
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
            </div>
        </div>
    )
}
