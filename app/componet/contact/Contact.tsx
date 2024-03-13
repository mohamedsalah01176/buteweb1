import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Contact() {
  return (
    <div className='p-5'>
      <div className='w-full py-10 px-6 bg-slate-700 rounded-lg mb-5 flex flex-row flex-wrap gap-5 justify-around items-center'>
          <div className='w-10/12'>
              <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-900 text-6xl font-semibold '>Let’s try our service now!</h1>
              <p className='text-md text-slate-500 my-8 w-full'>Experience the power of Ocean CRM dashboard for engineering teams. Boost productivity and streamline collaboration. Get started today!</p>
          </div>
          <button className='bg-sky-500 py-3 px-5 rounded-lg hover:bg-sky-800 transition-all duration-500 '>get Start <ArrowForwardIcon/></button>
      </div>
    </div>
  )
}
