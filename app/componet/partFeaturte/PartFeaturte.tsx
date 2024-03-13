import { PartFeatuteCon } from '@/app/constants/Future'
import Image from 'next/image'
import React from 'react'


export default function PartFeaturte() {

  return (
    <div className={` flex flex-col gap-10 p-5 my-14`} >
        {PartFeatuteCon.map((item,index)=>{
            return(
                <div className={`flex   gap-5 items-center ${item.isreverse?'md:flex-row flex-col':" flex-col md:flex-row-reverse"}`} key={index}>
                    <div className="basis-5/12 ">
                        <Image src={item.imageUrl} width={500} height={500} alt='feature'/>
                    </div>
                    <div className="basis-7/12 ">
                        <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-sky-800 to-sky-400 text-2xl font-medium mb-5'>{item.title}</h1>
                        <p className='text-md text-slate-400 '>{item.description}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
