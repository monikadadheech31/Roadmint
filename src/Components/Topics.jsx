import React from 'react'

const Topics = ({data}) => {
  return (
    <div className='border-[1px] text-xs border-gray-300 rounded-lg px-5 py-2 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer inline-block'>
      {data.name}
    </div>
  )
}


export default Topics