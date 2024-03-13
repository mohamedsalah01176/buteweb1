import Link from 'next/link'
import React from 'react'
import DropBar from '../dropBar/DropBar'

export default function Navbar() {

  return (
    <div className=' z-30 fixed top-0 left-0 w-full backdrop-blur-md bg-slate-900/50 p-7 '>
        <div className="container mx-auto flex flex-row justify-between items-center">
            <Link href={"/"} className=" text-2xl font-medium  hover:scale-125 hover:text-slate-700 transition-all duration-500">MS</Link>
            <div className="links hidden gap-5 md:flex ">
                <Link href={"/"}  className="   hover:scale-125 hover:text-slate-700 transition-all duration-500">Features</Link>
                <Link href={"/"}  className="   hover:scale-125 hover:text-slate-700 transition-all duration-500">Pricing</Link>
                <Link href={"/"}  className="   hover:scale-125 hover:text-slate-700 transition-all duration-500">testimonails</Link>
                <Link href={"/"}  className="   hover:scale-125 hover:text-slate-700 transition-all duration-500">Contact</Link>
            </div>
            <DropBar/>
        </div>
    </div>
  )
}
