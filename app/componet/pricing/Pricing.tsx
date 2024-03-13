"use client"
import { PricingSection } from '@/app/constants/Pricing'
import CheckIcon from '@mui/icons-material/Check';
import React, { useState } from 'react'

export default function Pricing() {
    const [mode,setMode]=useState("month")
  return (
    <div className='p-7'>
        <h1 className='text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-800 to-sky-200 text-3xl font-semibold  '>Find a plan to power your projects</h1>
        <div className="btn bg-slate-700 w-fit mx-auto rounded-md p-1 my-3">
            <button className={`py-2 px-5 ${mode === "month"?"bg-sky-500 ":"bg-slate-700 "} rounded-md text-md w-28 `} onClick={()=>setMode("month")}>Monthly</button>
            <button className={`py-2 px-5 ${mode === "year"?"bg-sky-500 ":"bg-slate-700 "}rounded-md text-md w-28`} onClick={()=>setMode("year")}>year</button>
        </div>
        <div className='gap-3 grid sm:grid-cols-2 lg:grid-cols-3'>
            {PricingSection.map((item,index)=>{
                return(
                    <div key={index} className={`bg-slate-600/20 px-6 py-8 ${item.isMostPopular?"border-sky-600":"border-slate-600"} border-2  rounded-md relative hover:border-sky-400 transition-all duration-500`}>
                        {item.isMostPopular&&<div className="absolute top-3 right-2 bg-sky-500 rounded-full p-2 text-sm">Most Popular</div>}
                        <h1 className='text-xl font-medium'>{item.title}</h1>
                        <p className='my-3 text-slate-500'>{item.description}</p>
                        {
                            mode === "month"?
                            <h3><span className='font-bold text-3xl'>${item.priceM}</span>/Month</h3>
                            :
                            <h3><span className='font-bold text-3xl'>${item.priceY}</span>/Year</h3>
                        }
                        {item.isMostPopular?
                        <button className='w-full bg-sky-600 py-2 px-5 rounded-lg my-3 hover:bg-sky-500 transition-all duration-500'>Buy Now</button>
                        :
                        <button className='w-full bg-slate-700 py-2 px-5 rounded-lg my-3 hover:bg-slate-500 transition-all duration-500'>Buy Now</button>

                        }
                        <div>
                            {item.array.map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <p className='my-3'><CheckIcon className='text-blue-500 mr-2'/><span className='text-slate-500'>{item}</span></p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
