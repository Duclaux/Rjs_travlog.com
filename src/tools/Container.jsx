import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='mx-auto max-w-[398px] px-2 sm:max-w-[700px] md:px-0 lg:max-w-[950px] xl:max-w-[1500px]'>{ children }</div>
  )
}

export default Container