import { TestimonailCon } from '@/app/constants/Testmonail'
import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Image from 'next/image';

export default function Testmonail() {
  return (
    <div className='gap-3 grid sm:grid-cols-2 lg:grid-cols-3 my-10 p-7 '>
        {TestimonailCon.map((item,index)=>{
            return(
                <div className='flex flex-col gap-3  ' key={index}>
                    <FormatQuoteIcon className='text-blue-500 mx-auto  text-7xl'/>
                    <p className='text-md text-slate-600'>{item.description}</p>
                    <div className='flex flex-row justify-center items-center gap-4  '>
                        <div className="image">
                            <Image src={item.imageUrl} alt='aaa' width={50} height={50} className='rounded-full' />
                        </div>
                        <div className="text">
                            <h1 className='text-lg font-semibold'>{item.title}</h1>
                            <p className='text-sky-500'>{item.review}</p>
                        </div>
                    </div>

                </div>
            )
        })}
    </div>
  )
}
