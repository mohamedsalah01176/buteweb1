import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import style from "./land.module.css"
import Image from 'next/image';

export default function Land() {
  return (
    <div className={style.con}>
      <div className={`${style.land} flex text-center justify-center  items-center mt-3 flex-col gap-3 py-6`}>
        <div className='border w-72 p-3 rounded-3xl text-center mt-6 hover:bg-slate-50/50 transition-all duration-500'>New Futeres is Now Avaliable <ArrowForwardIcon className='border rounded-full'/></div>
        <h1 className='text-3xl capitalize bg-clip-text text-transparent bg-gradient-to-t from-sky-800 to-sky-500 font-semibold'>a cam dashboard for engineering teams</h1>
        <p className='text-xl bg-clip-text text-transparent bg-gradient-to-t from-slate-400 to-sky-900 font-lg'>Boost engineering team’s productivity with Ocean CRM dashboard that streamlines project management, collaboration, and data-driven decision-making.</p>
        <div className="flex gap-5 items-center">
          <button className='px-6 py-3 bg-cyan-600 rounded-lg hover:bg-cyan-800 transition-all duration-500'>Get Start</button>
          <button className='border px-5 py-3 rounded-lg hover:bg-slate-500/50 transition-all duration-500'>View Pricing</button>
        </div>
        <Image src={"/Hero-image.svg"} width={500} height={500} alt='aa'/>
      </div>
    </div>
  )
}
