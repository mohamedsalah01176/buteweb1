import { CardFuture } from '@/app/constants/Future'
import Image from 'next/image'
import React from 'react'
import style from "./future.module.css"

export default function Futeres() {
  return (
    <div className={` ${style.back} p-5 flex flex-col md:flex-row justify-between items-center gap-7`} >
        <div className="">
            <h1 className='font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-t from-sky-800 to-sky-300'>Powerful features to help you manage all your leads.</h1>
            <p className='my-3 text-slate-600'>Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.</p>
            <button className='bg-sky-600 rounded-lg hover:bg-sky-950 transition-all duration-500 p-3'>Get Started</button>
        </div>
        <div className="">
            {CardFuture.map((item,index)=>{
                return(
                    <div key={index} className=" flex justify-center items-center  my-2 gap-3 hover:bg-slate-400/50 hover:border p-4 rounded-md transition-all duration-500">
                        <div className="w-32">
                            <Image className='' src={item.imageUrl} width={50} height={50} alt="aa"/>
                        </div>
                        <div className="text">
                            <h1 className=''>{item.title}</h1>
                            <p className='text-sm text-slate-600'>{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
