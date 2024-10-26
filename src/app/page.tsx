
import NewHero from '@/components/ui/hero'
import Biography from '@/components/ui/biography'
import Products from '@/components/ui/products'
import Location from '@/components/ui/location'
import ContactForm from '@/components/ui/contact-form'
import PressSection from '@/components/ui/press'
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/nav'

export default function Page() {
    return (
        <main>
            <div className="md:h-screen w-full isolate overflow-hidden flex flex-col bg-pastry">
                <Navbar />
                <NewHero/>
            </div>
            <Biography />
            <Products />
            <PressSection />
            <Location />
            <ContactForm />
            <Footer />
        </main>
    )
}
