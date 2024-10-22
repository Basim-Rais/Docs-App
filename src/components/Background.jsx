import React from 'react'

const Background = () => {
  return (
    <div className='w-full h-screen fixed z-[2]'>
      <div className='w-full flex justify-center py-10 absolute top-[5%] text-zinc-600 text-lg'>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] text-[12vw] font-semibold text-zinc-950'>Docs.</h1>
    </div>
  )
}

export default Background;
