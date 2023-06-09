import React, {useRef,useState} from 'react';
import Logo from '../images/archimedes_logo.svg';
import '../components/styles/Home.css';
import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import animationData from '../images/99349-girl-with-books.json';
import '../components/styles/navbar.css';
import axios from 'axios';
import {Cards} from '../components'

const Home = () => {
  
  const [FantasyData, setFantasyData] = useState([]);
  const [PoetryData, setPoetryData] = useState([]);
  const [FictionData, setFictionData]= useState([]);
  const [RomanceData, setRomanceData] = useState([]);

  axios.get(
  'https://www.googleapis.com/books/v1/volumes?q=subject:Fantasy&maxResults=4&key=AIzaSyAzmQ7izC2jVkxwEcIMquxd3okPismPwOw')
  .then((res) => {
    setFantasyData(res.data.items);});

    
  axios.get(
    'https://www.googleapis.com/books/v1/volumes?q=subject:Poetry&maxResults=4&key=AIzaSyAzmQ7izC2jVkxwEcIMquxd3okPismPwOw')
    .then((res) => {
      setPoetryData(res.data.items);});

  
  axios.get(
    'https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=4&key=AIzaSyAzmQ7izC2jVkxwEcIMquxd3okPismPwOw')
    .then((res) => {
      setFictionData(res.data.items);});


  axios.get(
    'https://www.googleapis.com/books/v1/volumes?q=subject:Romance&maxResults=4&key=AIzaSyAzmQ7izC2jVkxwEcIMquxd3okPismPwOw')
    .then((res) => {
      setRomanceData(res.data.items);});
      
      const animation =useRef<LottieRefCurrentProps>(null);
  return (
    <>
    <div className=' m-[2rem] p-[3rem] md:mb-[10rem] md:grid md:grid-cols-2 md:-my-[3rem]'>
      <div className='flex flex-col justify-center align-middle text-center md:text-left md:mx-[5rem]'>
          <img className='text-[#deb992] h-[30%] w-[50%] translate-x-[50%] py-[2rem] hide-on-desktop' src={Logo}></img>
          <h1 className=' text-[2.5rem] font-semibold text-[#deb992] md:text-[5rem]'>HEY,<br/> WELCOME TO<br />ARCHIMEDES</h1>
          <h2 className='text-[2rem] text-[#deb992] '>Reading, the smart way</h2>
       </div>
       <div className='h-[10%] w-full md:px-[3rem] md:mx-[2rem] hide-in-mobile'>
        <Lottie className='p-[5rem]' loop={true} lottieRef={animation} animationData={animationData}/>
       </div>
    </div>
    <section className=' m-[2rem]'>
      <h2 className='font-semibold text-[#deb992] text-[3rem] underline underline-offset-8'>EXPLORE</h2>
      <p className='text-center m-[2rem] text-[1rem] text-[#ADB7C6]'>Explore through our rich and expansive libraries</p>
        <h3 className='m-[2rem] text-[#deb992] text-[1.5rem] text-left'>FANTASY</h3>
        <div className='container mx-auto py-36 px-8 '>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[3rem]'>
            <Cards books={FantasyData}/>
        </div>
        </div>

        <h3 className='m-[2rem] text-[#deb992] text-[1.5rem] text-left'>POETRY</h3>
        <div className='container mx-auto py-36 px-8 '>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[3rem]'>
            <Cards books={PoetryData}/>
        </div>
        </div>

        <h3 className='m-[2rem] text-[#deb992] text-[1.5rem] text-left'>FICTION</h3>
        <div className='container mx-auto py-36 px-8 '>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[3rem]'>
            <Cards books={FictionData}/>
        </div>
        </div>

        <h3 className='m-[2rem] text-[#deb992] text-[1.5rem] text-left'>ROMANCE</h3>
        <div className='container mx-auto py-36 px-8 '>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[3rem]'>
            <Cards books={RomanceData}/>
        </div>
        </div>
    </section>
    </>
  )
}

export default Home
