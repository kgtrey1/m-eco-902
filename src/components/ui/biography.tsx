import Image from "next/image"

export default function Biography() {
    return (
        <div className="relative z-10 mt-32 bg-bg-chief sm:mt-56">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch lg:pb-[50px] pb-20">
                <div className="-mt-8 w-full max-w-2xl xl:w-96 xl:flex-none">
                    <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                        <Image
                            alt="Photographie de Philippe Lugnac"
                            src="/chief.webp"
                            fill
                            className="rounded-2xl bg-gray-800 object-cover shadow-2xl"
                            style={{
                                objectPosition: 'top'
                            }}
                        />
                    </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                    <p className="text-3xl font-semibold">Le chef</p>
                    <figure className="relative isolate pt-6 sm:pt-12">
                        <blockquote className="text-xl md:font-medium font-normal leading-8 text-black sm:text-2xl sm:leading-9">
                            <p>
                                Philippe Lugnac s’amuse autant à inventer qu’à réinventer, faire briller le répertoire classique parisien, visiter de nouvelles terres avec attention et donner de l’éclat aux soirées festives qui se prolongent.
                            </p>
                        </blockquote>
                    </figure>
                </div>
            </div>
      </div>
    )
}