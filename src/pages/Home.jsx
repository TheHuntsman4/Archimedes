import React from 'react'
import Logo from '../images/archimedes_logo.svg';
import '../components/styles/Home.css';

const Home = () => {
  return (
    <div className='h-[100vh] bg-[#D9DCFF] m-[2rem]'>
      <div className='flex flex-col justify-center align-middle text-center md:text-left md:m-[5rem]'>
          <img className='text-[#121856] h-[30%] w-[50%] translate-x-[50%] py-[2rem] hide-on-desktop' src={Logo}></img>
          <h1 className=' text-[2.5rem] font-semibold text-[#121856] md:text-[5rem]'>HEY,<br/> WELCOME TO<br />ARCHIMEDES</h1>
          <h2 className='text-[1rem] text-[#121856] '>Reading, the smart way</h2>
       </div>

    </div>
  )
}

export default Home
