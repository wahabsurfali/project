"use client"


import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {  Search } from "lucide-react"
import Animation from "../../public/loader.json"
import Lottie from "lottie-react"


const Loader = () => {
   
  return (
    <div className='w-full mx-auto  '>
        {/* input and button */}
      <div className='w-[70%] border border-gray-800 rounded-xl mx-auto flex items-center p-2'>
        {/* Input */}
        <Input type="text"  className='bg-transparent focus:outline-none focus:ring-transparent border-none text-xl placeholder:text-gray-300 '   placeholder="Search City Here...." />
        {/* Button */}
        <Button variant="ghost"  className="hover:bg-transparent text-white hover:text-gray-500 duration-300"  size="icon">
      <Search className="h-4 w-4" />
    </Button>
      </div>
      {/* Weather data */}
      <div className="mx-auto ">
     <div className="mt-20 flex items-center justify-center">
      <div className="flex flex-col bg-black/50 rounded px-4 w-full max-w-xs">
          <Lottie animationData={Animation}/>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Loader




