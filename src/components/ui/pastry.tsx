import Image from "next/image"

export default function Pastry() {
    return (
        <div className=" bg-pastry pt-[100px] pb-[100px]">

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch pt-100">

          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 bg-red-300">
            <figure className="relative isolate pb-6 sm:pt-12 bg-green-400">

              <blockquote className="text-xl font-semibold leading-8 text-black sm:text-2xl sm:leading-9">
                <h2>Nos pâtisseries</h2>
                <p>
                Créations originales, grands classiques revisités, gâteaux de voyage ou pour vos événements, découvrez le catalogue de nos produits disponibles en boutique...
                </p>
              </blockquote>
            </figure>
          </div>
          <div className="-mt-8 w-full max-w-2xl xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
            <Image
                alt="Chief image"
                src="/chief.webp"
                layout="fill"
                className="rounded-2xl bg-gray-800 object-cover shadow-2xl"
                objectPosition="top"
            />
            </div>
          </div>
        </div>
      </div>
    )
}