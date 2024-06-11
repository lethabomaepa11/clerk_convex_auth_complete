import Image from 'next/image'
import React from 'react'
const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Image
      src="/dmechat_icon.png"
      alt='logo'
      width={500}
      height={500}
      />
    </div>
  )
}

export default Loading
