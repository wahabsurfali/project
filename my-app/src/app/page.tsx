import Weather from '@/components/weather'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div>
    {/* image overlay */}
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[1]' />
    {/* background-image */}
    <Image src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    alt="background-image" layout='fill'
    className='object-cover'/>
    {/* weather data here */}
    <div className='relative z-10 mt-10 '>
      {/* <h1 className='text-white'>hello</h1> */}
      <Weather/>
    </div>
    {/* attributes */}
    <div className='absolute bottom-0 right-0 z-[1] text-white text-black/70 text-xl flex text-center gap-4 font-bold'> This Website Created By
    <Link href="https://www.linkedin.com/in/wahab-tariq-533595297/" target='_blank' className='text-black/70 text-xl flex text-center gap-4 line-clamp-1 font-bold'>  WAHAB SURFALI</Link>
    </div> 



   </div>
  )
}
