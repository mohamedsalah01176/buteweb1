"use client"
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';


export default function DropBar() {
    const [open,setOpen]=useState<boolean>(false)
    function openBar(){
        setOpen(!open)
    }
return (
    <div className="iconBars md:hidden cursor-pointer relative " onClick={()=>openBar()}>
        {open === true?
        <h2 className='text-xl hover:text-slate-700 transition-all duration-500 '>X</h2>
        :
        <MenuIcon className='text-3xl  hover:text-slate-700 transition-all duration-500 '/>
        }
        {open === true? 
        <div className="links  gap-5 flex flex-col bg-black absolute top-7 -right-5 p-2 w-60 text-center">
                <Link href={"/"}  className="   hover:scale-125 hover:text-slate-700 transition-all duration-500 pt-3 ">Features</Link>
                <div className='w-100 border'></div>
                <Link href={"/"}  className="   hover:scale-125 hover:text-slate-700 transition-all duration-500">Pricing</Link>
                <div className='w-100 border'></div>
                <Link href={"/"}  className="   hover:scale-125 hover:text-slate-700 transition-all duration-500">testimonails</Link>
                <div className='w-100 border'></div>
                <Link href={"/"}  className="   hover:scale-125 hover:text-slate-700 transition-all duration-500">Contact</Link>
                <div className='w-100 border'></div>
            </div>
        :
        ""
        }
    </div>
  )
}
