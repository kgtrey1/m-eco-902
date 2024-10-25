import HeroGrid from "./hero-grid";

export default function NewHero() {
    return (
        <section className='flex justify-between items-center lg:flex-row flex-col lg:flex-grow md:mb-0 mb-12'>
            <h2 className='md:text-3xl text-2xl md:min-w-[550px] md:w-[550px] mx-auto px-6 mt-12 italic font-bold self-center justify-self-center tracking-tight text-gray-900"'>
                “Nous travaillons à l&apos;émotion<br/>
                pour proposer des pâtisseries inscrites<br/>
                dans la gourmandise et la modernité.“
            </h2>
            <HeroGrid />
        </section>
    )
}
