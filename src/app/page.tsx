import ContactForm from '@/components/ui/contact-form'
import FindUs from '@/components/ui/find-us'
import NewHero from '@/components/ui/new-hero'
import Products from '@/components/ui/products'
import Biography from '@/components/ui/biography'



export default function Example() {

  return (
    <div>
      <div className="md:h-screen w-full isolate overflow-hidden flex flex-col">
        <div className='h-[60px] w-full flex bg-red-500'/>
        <NewHero/>
      </div>
      <Biography />
      <Products />
      <FindUs />
      <ContactForm />
    </div>
  )
}
