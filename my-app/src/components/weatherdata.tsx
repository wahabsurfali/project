import React from 'react'
import Image from 'next/image'
import  pic  from "../../download-removebg-preview (1).png"
import ErrorText from './error'

const WeatherData = (data:any) => {
   try{
    let a =data.data.current;
    let b =data.data.location;
    let c =data.data.current.condition;
    let d =data.data.forecast.forecastday;
    
    return (
      <>
      {/* component */}
      <div className="mt-20 flex items-center justify-center">
        <div className="flex flex-col bg-black/50 rounded p-4 w-full max-w-xs">
          <div className="font-bold text-xl text-white">{b.name}</div>
          <div className="text-sm text-white">{b.localtime}</div>
          <div className=" mx-auto py-6 ">
           <Image src={pic} alt={b.name} className='w-24 h-24' />
          </div>
          <div className="flex flex-row items-center justify-center ">
            <div className="font-medium text-6xl text-white">{`${Math.floor(a.temp_c)}°`}</div>
            <div className="flex flex-col items-center ml-6 text-white">
              <div className='font-semibold text-lg text-white'>{c.text}</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up" />
                </span>
                <span className="text-base font-semibold text-white">{`${Math.floor(d[1].day.avgtemp_c)}°C`}</span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down" />
                </span>
                <span className="text-base font-semibold text-white">20°C</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm text-white">Wind</div>
              <div className="text-sm text-white">{`${a.wind_kph}k/h`}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm text-white">Humidity</div>
              <div className="text-sm text-white">{`${a.humidity}%`}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm text-white">Visibility</div>
              <div className="text-sm text-white">{`${a.vis_km}km`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
    
    )
   }catch(error ){
    return <ErrorText/>
   }
   
}

export default WeatherData
