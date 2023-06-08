import React, {useRef} from 'react';
import Logo from '../images/archimedes_logo.svg';
import '../components/styles/Home.css';
import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import animationData from '../images/102427-owl-updated-2.json';
const Home = () => {
  
  const animation =useRef<LottieRefCurrentProps>(null);
  return (

    <div className='h-[80vh] m-[2rem] md:mb-[10rem] md:grid md:grid-cols-2 md:-my-[3rem]'>
      <div className='flex flex-col justify-center align-middle text-center md:text-left md:mx-[5rem]'>
          <img className='text-[#deb992] h-[30%] w-[50%] translate-x-[50%] py-[2rem] hide-on-desktop' src={Logo}></img>
          <h1 className=' text-[2.5rem] font-semibold text-[#deb992] md:text-[5rem]'>HEY,<br/> WELCOME TO<br />ARCHIMEDES</h1>
          <h2 className='text-[1rem] text-[#deb992] '>Reading, the smart way</h2>
       </div>
       {/* <div className='h-[10%] w-full md:px-[3rem] md:mx-[2rem]'>
        <Lottie  loop={true} lottieRef={animation} animationData={animationData}/>
       </div> */}

    </div>
  )
}

export default Home
