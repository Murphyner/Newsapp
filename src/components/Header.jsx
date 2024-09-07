import Nav from './Nav'

function Header() {
  return (
    <header className='min-h-[758px] w-full relative'>
      <div className='absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50' ></div> 
      <Nav />  
      <div className='absolute hidden md:flex  bottom-12  left-5 xl:left-14 z-20 w-[35%] sm:w-[50%] opacity-70  flex-col gap-5'>
        <h2 className='text-2xl md:text-3xl text-white'>The YouTuber who has become one of Gen Z’s most beloved celebrities</h2> 
        <div className='flex gap-10 items-center'>
          <span className='bg-colorCustom2 text-sm p-1 opacity-85 font-bold'>Dünya</span>
          <p className='text-white opacity-60 font-bold text-sm'>August 29, 2019</p>
        </div>
        <div>
          <p className='text-white text-sm font-semibold opacity-70'>Last week, news broke that James Dean will star in a new movie—64 years after his death. A production company called Magic City got the rights to Dean's image from the late actor's estate...</p>
        </div>
      </div> 
    </header>
  )
}

export default Header
