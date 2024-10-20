import HeroGrid from "./hero-grid";

export default function NewHero() {
    return (
        <div className='flex justify-between items-center md:flex-row flex-col md:flex-grow'>
<svg
aria-hidden="true"
className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full max-h-screen stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
>
<defs>
    <pattern
        x="50%"
        y={-1}
        id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
        width={200}
        height={200}
        patternUnits="userSpaceOnUse"
    >
        <path d="M.5 200V.5H200" fill="none" />
    </pattern>
</defs>
<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
    <path
        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        strokeWidth={0}
    />
</svg>
<rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
</svg>
            <h2 className='text-3xl md:min-w-[450px] md:w-[450px]  pl-0 md:pl-20 lg:pl-40 md:mr-32 md:mt-0 mt-12 ml-7 mr-7 italic font-bold self-center justify-self-center tracking-tight text-gray-900 sm:text-6xl"'>
                “Nous travaillons à l&apos;émotion dans la gourmandise et la modernité.“
            </h2>
            
            <HeroGrid />
        </div>
    )
}