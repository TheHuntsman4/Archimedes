import React from 'react';
import {ReactComponent as Icon1} from '../images/Mediamodifier-Design (21).svg';
import { useState } from 'react';
import axios from "axios";
import Card from './Card';

const buttons=[{name:"HOME",link:"#"},{name:"ABOUT",link:"#"},{name:"CATEGORIES",link:"#"}];

const NavButton=({name,link})=>{
  return(
    <div className='hidden sm:ms-[2rem] sm:inline-block px-[3rem] py-[1rem]  rounded-full bg-[#0C1039] font-Roboto text-[#DEB992] hover:bg-[#202975] hover:text-teal-400 transition duration-300 delay-75'>
      <a href={link}>{name}</a>
    </div>
  )  
};


const Header = () => {
  const [search,setSearch]=useState("")
  const [bookData,setBookData]=useState([])

  const searchBooks=(event)=>{
    if(event.key==="Enter"){
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=30'+'&key=AIzaSyD6fYDSn8C9QRVd96Za2SPTklhbllnpGL4')
        .then(res=>(setBookData(res.data.items)))
    }
  }
  const handleOnClick=()=>{
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=30'+'&key=AIzaSyD6fYDSn8C9QRVd96Za2SPTklhbllnpGL4')
      .then(res=>(setBookData(res.data.items)))
  }
  console.log(bookData)
  
  return (
    <>
    <div className='w-full mb-[3rem] '>
      <Icon1 className='w-full  bg-[#0C1039] '/>
        <div className='sm:float-left float-left bg-[#0C1039] w-full inline-block sm:mt-[-rem] py-8'>
            <div className='sm:float-left'>
              {buttons.map((button)=>
                <NavButton name={button.name} link={button.link} />
              )
              }
              </div>
              {/*search bar component*/}
              <div className=" mx-[4rem] sm:mx-[2rem] sm:px-[5rem] max-[860px]:mx-auto  py-[1rem] rounded-full min-h-full bg-[#202975] text-[#DEB992] hover:text-teal-400 sm:float-right block">
              <input type="text" placeholder='Search...' 
              className='bg-[#202975] text-[#DEB992] shadow-none' 
              value={search} onChange={e=>setSearch(e.target.value)}
              onKeyDown={searchBooks}
              />
              <button className='align-right'
              onClick={handleOnClick}
              >GO</button>
              </div>
        </div>
            <Card books={bookData}/>

</div>
  </>
  )
}

export default Header;
