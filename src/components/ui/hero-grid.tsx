import Image from "next/image"

export default function HeroGrid() {
    return (
        <div className="flex flex-row items-center gap-7 lg:mr-14 md:-mr-0 -mr-96 md:mt-0 mt-7 overflow-hidden flex-shrink-0">
            <Image
                alt="Le chef Lignac prépare des gourmandises"
                src="/illustration-1.webp"
                width={176}
                height={264}
                className="aspect-[2/3] rounded-xl bg-gray-900/5 object-cover shadow-lg w-[176px] h-[264px]"
            />
            <div className="flex flex-col gap-7 flex-shrink-0">
                <Image
                    alt="Plein de tartines à découvrir"
                    src="/illustration-2.webp"
                    width={176}
                    height={264}
                    className="aspect-[2/3] rounded-xl bg-gray-900/5 object-cover shadow-lg w-[176px] h-[264px]"
                />
                <Image
                    alt="Des baguettes excellentes"
                    src="/illustration-3.webp"
                    width={176}
                    height={264}
                    className="aspect-[2/3] rounded-xl bg-gray-900/5 object-cover shadow-lg w-[176px] h-[264px]"
                />
            </div>
            <Image
                alt="Un croissant avec du chocolat"
                src="/illustration-4.webp"
                width={176}
                height={264}
                className="aspect-[2/3] rounded-xl bg-gray-900/5 object-cover shadow-lg w-[176px] h-[264px]"
            />
        </div>
    )
}