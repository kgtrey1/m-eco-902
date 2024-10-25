import Image from "next/image"

export default function Products() {
    return (
        <section id="products" className="relative z-10 py-20 bg-pastry">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row-reverse xl:items-stretch">
                <div className="w-full max-w-2xl xl:w-96 xl:flex-none">
                    <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <Image
                            alt="Une image des pâtisseries du chef Philippe Lugnac"
                            src="/products.webp"
                            fill
                            className="rounded-2xl bg-gray-800 object-cover shadow-2xl"
                            style={{
                                objectPosition: 'top'
                            }}
                        />
                    </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                    <h2 className="text-3xl font-bold">Nos pâtisseries</h2>
                    <figure className="relative isolate pt-6 sm:pt-12">
                        <blockquote className="text-xl md:font-medium font-normal leading-8 text-black sm:text-2xl sm:leading-9">
                            <p>
                                Créations originales, grands classiques revisités, gâteaux de
                                voyage ou pour vos événements, découvrez le catalogue de nos produits
                                disponibles en boutique...
                            </p>
                        </blockquote>
                    </figure>
                </div>
            </div>
        </section>
    )
}