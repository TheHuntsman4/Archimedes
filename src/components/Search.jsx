import React from 'react';
import {ReactComponent as Icon1} from '../images/Mediamodifier-Design (21).svg';
import { useState } from 'react';
import axios from "axios";
import Cards from './Cards';
import {BsSearch} from 'react-icons/bs'
import {motion} from 'framer-motion';
import { Landing } from '../pages';

const listVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -16
  },
  visible: {
    opacity: 1,
    x: 0
  }
};



const Search = () => {
  const [search,setSearch]=useState("")
  const [bookData,setBookData]=useState([])

  const searchBooks=(event)=>{
    if(event.key==="Enter"){
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=40'+'&key=AIzaSyD6fYDSn8C9QRVd96Za2SPTklhbllnpGL4')
        .then(res=>(setBookData(res.data.items)))
    }
  }
  const handleOnClick=()=>{
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=40'+'&key=AIzaSyD6fYDSn8C9QRVd96Za2SPTklhbllnpGL4')
      .then(res=>(setBookData(res.data.items)))
  }
  
  return (
    <>
    <div className=' h-auto mb-[3rem] '>

      {/*body of the app*/}
              
          {/*search bar component*/}

              <input type="text" placeholder='Search...' 
              className=  'text-md  mt-[1rem] p-[1rem] text-center  rounded-full bg-[#202975] text-[#DEB992] shadow-none' 
              value={search} onChange={e=>setSearch(e.target.value)}
              onKeyDown={searchBooks}
              />
        {bookData.length===0 ? <Landing /> :
        <div className='container mx-auto py-36 px-8 '>
        <motion.div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-[3rem]'
        variants={listVariants}
        initial="hidden"
        animate="show">
            <Cards books={bookData}/>
        </motion.div>
        </div>
}
</div>
  </>
  )
}

export default Search;
