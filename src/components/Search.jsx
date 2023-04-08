import React from 'react';
import { useState } from 'react';
import axios from 'axios';
const Search = () => {
    const [search,setSearch]=useState("")
    const [bookData,setBookData]=useState([])
  
    const searchBooks=(event)=>{
      if(event.key==="Enter"){
          axios.get('https://www.googleapis.com/books/v1/volumes?q=marcus%20aurelius&maxResults=20&key=AIzaSyD6fYDSn8C9QRVd96Za2SPTklhbllnpGL4')
          .then(res=>(setBookData(res.data.items)))
      }
    }
    const handleOnClick=()=>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q=marcus%20aurelius&maxResults=20&key=AIzaSyD6fYDSn8C9QRVd96Za2SPTklhbllnpGL4')
        .then(res=>(setBookData(res.data.items)))
    }
    
  return (
    
    <>
        <input type="text" placeholder='Search...' 
        className='bg-[#202975] text-[#DEB992]' 
        value={search} onChange={e=>setSearch(e.target.value)}
        onKeyDown={searchBooks}
        />
        <button className='align-right'
        onClick={handleOnClick}
        >GO</button>
    </>
  )
}

export default Search

