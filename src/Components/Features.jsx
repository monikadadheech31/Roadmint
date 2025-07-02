import React from 'react'

const Features = ({data}) => {
  return (
    <div className='flex flex-col justify-start items-start px-6 py-3 w-70'>
      {data.img}
      <h3>{data.title}</h3>
      <p>{data.para}</p>
    </div>
  )
}


export default Features