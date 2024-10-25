
import NewHero from '@/components/ui/hero'
import Biography from '@/components/ui/biography'
import Products from '@/components/ui/products'
import Location from '@/components/ui/location'
import ContactForm from '@/components/ui/contact-form'
import Footer from '@/components/ui/footer'

export default function Page() {
    return (
        <main>
            <div className="md:h-screen w-full isolate overflow-hidden flex flex-col">
                { /* insert header here */ }
                <NewHero/>
            </div>
            <Biography />
            <Products />
            { /* insert "On parle de nous here" */ }
            <div className="min-h-10 pt-7 min-w-10 bg-red-500"/>
            <Location />
            <ContactForm />
            <Footer />
        </main>
    )
}
