import NewHero from '@/components/ui/new-hero'



export default function Example() {

  return (
    <div className="md:h-screen w-full isolate overflow-hidden flex flex-col">
    <div className='h-[60px] w-full flex bg-red-500'/>
      {/* Header */}
      <NewHero/>


      <main className="isolate bg-green-800 w-full">
        {/* Hero section */}
  
      </main>


    </div>
  )
}
