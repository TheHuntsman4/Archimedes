import React from 'react';
import {ReactComponent as Icon1} from '../images/Mediamodifier-Design (21).svg';
import { useState } from 'react';
import axios from "axios";
import Card from './Card';
import {BsSearch} from 'react-icons/bs'


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
    <div className=' mb-[3rem] '>

      {/*body of the app*/}
              
          {/*search bar component*/}
              {/* <div className=" mx-auto  rounded-full min-h-full bg-[#202975] text-[#DEB992] hover:text-teal-400  inline-block"> */}

              <input type="text" placeholder='Search...' 
              className=  'text-md  mt-[1rem] p-[1rem] text-center rounded-tl-full rounded-bl-full bg-[#202975] text-[#DEB992] shadow-none' 
              value={search} onChange={e=>setSearch(e.target.value)}
              onKeyDown={searchBooks}
              /><button className='align-right pb-[1.25rem] pl-[1.25rem] pr-[1.25rem] pt-[1.125rem]  text-center rounded-tr-full rounded-br-full bg-[#202975] text-[#DEB992] shadow-none'
              onClick={handleOnClick}
              ><BsSearch /></button>
              {/* </div> */}
        
        <div className='container mx-auto py-36 px-8 '>
        <div className='grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-[3rem]'>
            <Card books={bookData}/>
        </div>
        </div>

</div>
  </>
  )
}

export default Header;
