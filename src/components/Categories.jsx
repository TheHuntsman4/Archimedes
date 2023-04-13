import React from 'react'
import Navbar from './NavBar'
import { ReactComponent as Logo } from '../images/fiction.svg';
import { useState } from 'react';
import Card from './Cards';
import axios from 'axios';
import {motion} from 'framer-motion'

const Categories = () => {

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

const [Hide,setHide]=useState(true)
const [bookData,setBookData]=useState([])

const Genres=[{name:"Fiction",gradient:"bg-gradient-to-r from-[#FFA123] to-transparent"},{name:"Poetry",gradient:"bg-gradient-to-r from-[#E74C3C] to-transparent"},{name:"Romance",gradient:"bg-gradient-to-r from-[#3498DB] to-transparent"},{name:"Fantasy",gradient:"bg-gradient-to-r from-[#2ECC71] to-transparent"},{name:"Adult",gradient:"bg-gradient-to-r from-[#9B59B6] to-transparent"},{name:"Anthologies",gradient:"bg-gradient-to-r from-[#F1C40F] to-transparent"},{name:"Art",gradient:"bg-gradient-to-r from-[#27AE60] to-transparent"},
{name:"Biographies",gradient:"bg-gradient-to-r from-[#D35400] to-transparent"},{name:"Body",gradient:"bg-gradient-to-r from-[#8E44AD] to-transparent"},{name:"Business",gradient:"bg-gradient-to-r from-[#1ABC9C] to-transparent "},{name:"Children",gradient:"bg-gradient-to-r from-[#C0392B] to-transparent"},{name:"Comics",gradient:"bg-gradient-to-r from-[#2980B9] to-transparent"},{name:"Contemporary",gradient:"bg-gradient-to-r from-[#16A085] to-transparent"},{name:"Cooking",gradient:"bg-gradient-to-r from-[#7F8C8D] to-transparent "},{name:"Crime",gradient:"bg-gradient-to-r from-[#F44336] to-transparent"},
{name:"Detective",gradient:"bg-gradient-to-r from-[#3F51B5] to-transparent"},{name:"Engineering",gradient:"bg-gradient-to-r from-[#FF9800] to-transparent"},{name:"Entertainment",gradient:"bg-gradient-to-r from-[#9C27B0] to-transparent"},{name:"Fantasy",gradient:"bg-gradient-to-r from-[#FF5722] to-transparent"},{name:"Food",gradient:"bg-gradient-to-r from-[#8BC34A] to-transparent"},{name:"General",gradient:"bg-gradient-to-r from-[#FFEB3B] to-transparent"},{name:"Health",gradient:"bg-gradient-to-r from-[#FFEB3B] to-transparent"},{name:"History",gradient:"bg-gradient-to-r from-[#4CAF50] to-transparent"},
{name:"Horror",gradient:"bg-gradient-to-r from-[#2196F3] to-transparent"},{name:"Investing",gradient:"bg-gradient-to-r from-[#795548] to-transparent"},{name:"Literary",gradient:"bg-gradient-to-r from-[#FFC107] to-transparent"},{name:"Literature",gradient:"bg-gradient-to-r from-[#9E9E9E] to-transparent"},{name:"Manga",gradient:"bg-gradient-to-r from-[#673AB7] to-transparent"},{name:"Media-help",gradient:"bg-indigo-600"},{name:"Memoirs",gradient:"bg-indigo-600"},{name:"Mind",gradient:"bg-indigo-600"},
{name:"Mystery",gradient:"bg-indigo-600"},{name:"Non-Fiction",gradient:"bg-indigo-600"},{name:"Religion",gradient:"bg-indigo-600"},{name:"Romance",gradient:"bg-indigo-600"},{name:"Science",gradient:"bg-indigo-600"},{name:"Self",gradient:"bg-indigo-600"},{name:"Spirituality",gradient:"bg-indigo-600"},{name:"Sports",gradient:"bg-indigo-600"},{name:"Superheroes",gradient:"bg-indigo-600"},{name:"Technology",gradient:"bg-indigo-600"},
{name:"Thriller",gradient:"bg-indigo-600"},{name:"Travel",gradient:"bg-indigo-600"},{name:"Women",gradient:"bg-indigo-600"},{name:"Young",gradient:"bg-indigo-600"},{name:"Architecture",gradient:"bg-indigo-600"},{name:"Biology",gradient:"bg-indigo-600"},{name:"Philosophy",gradient:"bg-indigo-600"},{name:"Indian",gradient:"bg-indigo-600"},];
  
const handleOnClick=(search)=>{
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=30'+'&key=AIzaSyD6fYDSn8C9QRVd96Za2SPTklhbllnpGL4')
    .then(res=>(setBookData(res.data.items)))
    setHide(!Hide);
}

return (
    <>  
    <div className='container  mx-auto py-10  px-8 '>
    <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-[3rem]'>
        
    {Hide ? 
    < >
    {Genres.map(Genre=>(    
        <motion.div 
        variants={listVariants}
        initial="hidden"
        animate="show"
        className={'h-auto w-full cursor-pointer hover:scale-125 hover:border-white hover:border '+Genre.gradient} onClick={()=>{handleOnClick(Genre.name)}}>
            
            <span>
            <h3 className={'text-black text-left p-[2rem] text-xl uppercase text-bold'+Genre.gradient}>{Genre.name}</h3>
            </span>
        </motion.div>
    ))}
    setHide(false)gcos
    </>
        :
    <Card books={bookData}/>}
    
    </div>  
    </div>
    </>

  )
}


export default Categories
     
