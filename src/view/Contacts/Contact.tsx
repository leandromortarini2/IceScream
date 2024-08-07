import React from 'react'

function Contact():React.ReactElement {
  return (
    <div className='bg-Terciario p-10 min-w-screen min-h-screen'>
      <div className='flex bg-black w-full min-h-svh'>
        <div className='bg-yellow-400 m-auto w-1/2 h-[650px]'> <p>a</p></div>
        <div className='bg-red-400 m-auto w-1/3 h-[320px]'> <p>b</p></div>
        <div className='bg-red-400 m-auto w-1/5 h-[320px]'> <p>c</p></div>
      </div>
    </div>
  )
}

export default Contact