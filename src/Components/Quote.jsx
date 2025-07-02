import React from 'react'

const Quote = () => {
  return (
    <div className='flex flex-col justify-center items-center py-8 gap-12'>
      <div className='flex flex-col justify-center items-center w-[40rem] gap-4'>
        <p className='text-gray-500 font-bold text-xl'>Quote</p>
        <p className='font-bold text-2xl italic text-center'>Anyone who dreams of an uncommon life eventually discovers there is no choice but to seek an uncommon approach to living it.</p>
        <p className='text-xs'>- Gray W. Keller</p>
      </div>
      <div className='w-[60rem] flex flex-col gap-4'>
        <div className='flex flex-col justify-center items-start p-6 gap-3 bg-[#262626] rounded-lg w-full'>
          <p className='text-gray-50 '>Daily Tips: </p>
          <p className='font-bold'>Enjoy the journey — not just the destination.</p>
        </div>
        <div className='flex flex-col justify-center items-start p-6 gap-3 bg-[#262626] rounded-lg w-full'>
          <p className='text-gray-50 '>Fun Developer Stat: </p>
          <p className='font-bold'>45% of developers prefer working at night — true code vampires 🧛‍♂️.</p>
        </div>
        <div className='flex flex-col justify-center items-start p-6 gap-3 bg-[#262626] rounded-lg w-full'>
          <p className='text-gray-50 '>Daily Trivia: </p>
          <p className='font-bold'>How long is an IPv6 address?</p>
          <div className='flex justify-center items-center gap-3'>
            <div className='bg-[#525252] px-5 py-2 rounded-lg'>128 bits</div>
            <div className='bg-[#525252] px-5 py-2 rounded-lg'>64 bits</div>
            <div className='bg-[#525252] px-5 py-2 rounded-lg'>128 bits</div>
            <div className='bg-[#525252] px-5 py-2 rounded-lg'>32 bits</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote