import ContactForm from '@/components/ui/contact-form'
import Location from '@/components/ui/location'
import NewHero from '@/components/ui/new-hero'
import Products from '@/components/ui/products'
import Biography from '@/components/ui/biography'

export default function Home() {
  return (
    <div>
      <div className="md:h-screen w-full isolate overflow-hidden flex flex-col">
        <div className='h-[60px] w-full flex bg-red-500'/>
        <NewHero/>
      </div>
      <Biography />
      <Products />
      <div className="h-20"/>
      <Location />
      <ContactForm />
    </div>
  )
}
