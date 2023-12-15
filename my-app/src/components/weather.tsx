"use client"


import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {  Search } from "lucide-react"
import WeatherData from './weatherdata'
import useSWR from 'swr';
import { useState } from "react";
import  Loader from "../components/loader"

const Weather = () => {
    // use state for search
    const[search, setSearch] = useState("")
    const[city, setCity] = useState("Karachi")
    console.log("search: ", search)
    // fetcher function
    let apiLink:string= `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
    const fetcher=(url:string)=>fetch(url).then((res)=>res.json())
    // swr library
    const { data, error, isLoading } = useSWR(apiLink, fetcher)
 
    if (error) return <div>failed to load</div>
    if (isLoading) return  <Loader/>
  return (
    <div className='w-full mx-auto  '>
        {/* input and button */}
      <div className='w-[70%] border border-gray-800 rounded-xl mx-auto flex items-center p-2'>
        {/* Input */}
        <Input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} className='bg-transparent focus:outline-none focus:ring-transparent border-none text-xl placeholder:text-gray-300 '   placeholder="Search City Here...." />
        {/* Button */}
        <Button variant="ghost" onClick={()=>{
            setCity(search)
            setSearch("")
        }} className="hover:bg-transparent text-white hover:text-gray-500 duration-300"  size="icon">
      <Search className="h-4 w-4" />
    </Button>
      </div>
      {/* Weather data */}
      <div className="mx-auto ">
        <WeatherData data={data}/>
      </div>
    </div>
  )
}

export default Weather
// ${process.env.NEXT_PUBLIC_WEATHER_API_KEY}