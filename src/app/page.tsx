
import NewHero from '@/components/ui/new-hero'
import Biography from '@/components/ui/biography'
import Products from '@/components/ui/products'
import Location from '@/components/ui/location'
import ContactForm from '@/components/ui/contact-form'
import PressSection from '@/components/ui/On-parle'

export default function Home() {
    return (
        <main>
            <div className="md:h-screen w-full isolate overflow-hidden flex flex-col">
                { /* insert header here */ }
                <NewHero/>
            </div>
            <Biography />
            <Products />
            <PressSection />
            <Location />
            <ContactForm />
        </main>
    )
}
