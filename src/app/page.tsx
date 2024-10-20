import ContactForm from '@/components/ui/contact-form'
import FindUs from '@/components/ui/find-us'
import NewHero from '@/components/ui/new-hero'
import Pastry from '@/components/ui/pastry'
import Testi from '@/components/ui/testi'



export default function Example() {

  return (
    <div>
      <div className="md:h-screen w-full isolate overflow-hidden flex flex-col">
        <div className='h-[60px] w-full flex bg-red-500'/>
        <NewHero/>
      </div>
      <Testi />
      <Pastry />
      <FindUs />
      <ContactForm />
    </div>
  )
}
