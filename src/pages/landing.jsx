import React from 'react'
import { ReactComponent as Icon2 } from '../images/archimedes logo beige.svg'


const Landing = () => {
  return (
    <>
      <div className='container mx-auto py-36 px-8 '>
      <Icon2 className='mx-auto h-[10rem] pb-[3rem]'  />
        <div className='text-900'> 
        <p className='align-left text-3xl text-[#DEB992]'>Use the search bar or the catgories section to browse for books......</p>
        </div>
      </div>
    </>
  )
}

export default Landing
