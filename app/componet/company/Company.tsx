import { client } from '@/app/constants/Client'
import Image from 'next/image'
import React from 'react'


export default function Company() {
  return (
    <div className= ' p-3 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 justify-center w-full my-7'>
        {client.map((item,index)=>{
            return(
                <Image key={index}  src={item.imageUrl} height={200} width={200} alt={item.alt}/>
            )
        })}
    </div>
  )
}
