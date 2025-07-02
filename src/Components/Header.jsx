import React from 'react'
import Section from './Section'

const Header = () => {
  return (
    <header className='sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm bg-black'>
    <nav className='mt-3 relative w-full px-4 lg:py-4 lg:px-8'>
    <div className='flex items-center justify-between gap-10'>
        <button className='text-2xl text-white font-semibold tracking-wide flex items-center w-fit' type='button' aria-label='Navigate'>
            <img src='logo.webp' width={50} height={50} className='w-10 mt-0.5'/>
            Road
            <span className='text-[#60ff1c]'>m</span>
             <span className='text-[#ff708f]'>i</span>
              <span className='text-[#ffd86c]'>n</span>
               <span className='text-[#e97cff]'>t</span>
        </button>
        <button   type='button' aria-label='Navigate' className='text-gray-300 font-semibold cursor-pointer lg:font-medium bg-neutral-800 hover:bg-neutral-900 hover:text-white border-2 border-neutral-700 duration-300 px-5 lg:px-10 py-2 lg:py-2.5 rounded-sm hover:-translate-y-0.5 active:scale-95'>
            Your Desk
        </button>
    </div>
    </nav>
   
    </header>
  )
}

export default Header