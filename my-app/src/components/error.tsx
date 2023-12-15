import React from 'react'
import Animation from "../../public/error.json"
import Lottie from "lottie-react"

const ErrorText = () => {
  return (
    <div className="mx-auto ">
    <div className="mt-20 flex items-center justify-center">
     <div className="flex flex-col bg-black/50 rounded px-4 w-full max-w-xs">
         <Lottie animationData={Animation} className='animate-bounce'/>
         <h1 className='text-lg font-mono font-semibold text-yellow-50 animate-pulse'>please make sure you have write correct city name</h1>
     </div>
  
   </div>
     </div>
  )
}

export default ErrorText;
