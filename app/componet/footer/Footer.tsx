import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 gap-3  p-5 '>
        <div className=''>
            <h1 className='text-3xl text-sky-600'>MS</h1>
            <p className='w-80 my-3'>Making the world a better place through constructing elegant hierarchies.</p>
            <div className="flex gap-2">
                <FacebookIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
            </div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-16'> 
            <div>
                <h1 className='mb-5 font-semibold text-xl'>Solution</h1>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Pricing</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Documentaion</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Guides</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>API Status</p>
            </div>
            <div>
                <h1 className='mb-5 font-semibold text-xl'>Support</h1>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Pricing</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Documentaion</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Guides</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer '>API Status</p>
            </div>
            <div>
                <h1 className='mb-5 font-semibold text-xl'>Company</h1>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>About</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Blog</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Press</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Jops</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Partners</p>
            </div>
            <div>
                <h1 className='mb-5 font-semibold text-xl'>Legal</h1>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Claim</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Privacy</p>
                <p className='mb-2 text-lg text-slate-500 hover:text-sky-600 transition-all duration-300 hover:translate-x-2 cursor-pointer'>Terms</p>
            </div>
            
        </div>
    </div>
  )
}
