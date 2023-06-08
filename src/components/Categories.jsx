import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Spinner from './Spinner';
import Cards from './Cards';

const Categories = () => {
  const listVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -16,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const [hide, setHide] = useState(true);
  const [bookData, setBookData] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const Genres = [
    { name: 'Fiction', gradient: 'bg-gradient-to-r from-[#78cce2] to-transparent' },
    { name: 'Poetry', gradient: 'bg-gradient-to-r from-[#b85c3c] to-transparent' },
    { name: 'Romance', gradient: 'bg-gradient-to-r from-[#80090f] to-transparent' },
    { name: 'Fantasy', gradient: 'bg-gradient-to-r from-[#2ECC71] to-transparent' },
    { name: 'Adult', gradient: 'bg-gradient-to-r from-[#8AAB83] to-transparent' },
    { name: 'Anthologies', gradient: 'bg-gradient-to-r from-[#F1C40F] to-transparent' },
    { name: 'Art', gradient: 'bg-gradient-to-r from-[#27AE60] to-transparent' },
    { name: 'Biographies', gradient: 'bg-gradient-to-r from-[#D35400] to-transparent' },
    { name: 'Body', gradient: 'bg-gradient-to-r from-[#e48d7a] to-transparent' },
    { name: 'Business', gradient: 'bg-gradient-to-r from-[#1ABC9C] to-transparent ' },
    { name: 'Children', gradient: 'bg-gradient-to-r from-[#C0392B] to-transparent' },
    { name: 'Comics', gradient: 'bg-gradient-to-r from-[#2980B9] to-transparent' },
    { name: 'Contemporary', gradient: 'bg-gradient-to-r from-[#16A085] to-transparent' },
    { name: 'Cooking', gradient: 'bg-gradient-to-r from-[#7F8C8D] to-transparent ' },
    { name: 'Crime', gradient: 'bg-gradient-to-r from-[#F44336] to-transparent' },
    { name: 'Detective', gradient: 'bg-gradient-to-r from-[#3F51B5] to-transparent' },
    { name: 'Engineering', gradient: 'bg-gradient-to-r from-[#FF9800] to-transparent' },
    { name: 'Entertainment', gradient: 'bg-gradient-to-r from-[#9C27B0] to-transparent' },
    { name: 'Fantasy', gradient: 'bg-gradient-to-r from-[#FF5722] to-transparent' },
    { name: 'Food', gradient: 'bg-gradient-to-r from-[#8BC34A] to-transparent' },
    { name: 'General', gradient: 'bg-gradient-to-r from-[#FFEB3B] to-transparent' },
    { name: 'Health', gradient: 'bg-gradient-to-r from-[#FFEB3B] to-transparent' },
    { name: 'History', gradient: 'bg-gradient-to-r from-[#4CAF50] to-transparent' },
    { name: 'Horror', gradient: 'bg-gradient-to-r from-[#2196F3] to-transparent' },
    { name: 'Investing', gradient: 'bg-gradient-to-r from-[#795548] to-transparent' },
    { name: 'Literary', gradient: 'bg-gradient-to-r from-[#FFC107] to-transparent' },
    { name: 'Literature', gradient: 'bg-gradient-to-r from-[#9E9E9E] to-transparent' },
    { name: 'Manga', gradient: 'bg-gradient-to-r from-[#673AB7] to-transparent' },
    { name: 'Media-help', gradient: 'bg-gradient-to-r from-[#00ffca] to-transparent' },
    { name: 'Memoirs', gradient: 'bg-gradient-to-r from-[#ade4db] to-transparent' },
    { name: 'Mind', gradient: 'bg-gradient-to-r from-[#ffebeb] to-transparent' },
    { name: 'Mystery', gradient: 'bg-gradient-to-r from-[#b85c3c] to-transparent' },
    { name: 'Non-Fiction', gradient: 'bg-gradient-to-r from-[#78cce2] to-transparent' },
    { name: 'Religion', gradient: 'bg-gradient-to-r from-[#78cce2] to-transparent' },
    { name: 'Science', gradient: 'bg-gradient-to-r from-[#000000] to-transparent' },
    { name: 'Self', gradient: 'bg-gradient-to-r from-gray-600 to-transparent' },
    { name: 'Spirituality', gradient: 'bg-gradient-to-r from[#fde2f3] to-transparent' },
    { name: 'Sports', gradient: 'bg-gradient-to-r from-[#efbeec] to-transparent' },
    { name: 'Superheroes', gradient: 'bg-gradient-to-r from-[#917FB3] to-transparent' },
    { name: 'Technology', gradient: 'bg-gradient-to-r from-[#FFF3E2] to-transparent' },
    { name: 'Thriller', gradient: 'bg-gradient-to-r from-[#fa9884] to-transparent' },
    { name: 'Travel', gradient: 'bg-gradient-to-r from-[#e49393] to-transparent' },
    { name: 'Women', gradient: 'bg-gradient-to-r from-[#f7c8e0] to-transparent' },
    { name: 'Young', gradient: 'bg-gradient-to-r from-[#ffacac] to-transparent' },
    { name: 'Architecture', gradient: 'bg-gradient-to-r from-[#408e91] to-transparent' },
    { name: 'Biology', gradient: 'bg-gradient-to-r from-[#b9f3e4] to-transparent' },
    { name: 'Philosophy', gradient: 'bg-gradient-to-r from-[#c7e9b0] to-transparent' },
    { name: 'Indian', gradient: 'bg-gradient-to-r from-[#febe8c] to-transparent' },
  ];

  const handleOnClick = (search) => {
    setShowSpinner(true); 
    setBookData([]); 

    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          'subject:' +
          search +
          '&maxResults=30' +
          '&key=AIzaSyD6fYDSn8C9QRVd96Za2SPTklhbllnpGL4'
      )
      .then((res) => {
        setBookData(res.data.items);
        setTimeout(() => {
          setShowSpinner(false); // Hide the spinner after 3 seconds
          setHide(!hide); // Show the Cards component
        }, 1000);
      });
  };

  return (
    <>
      <div className='container mx-auto py-10 px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-[3rem]'>
          {hide ? (
            <>
              {Genres.map((Genre) => (
                <motion.div
                  variants={listVariants}
                  initial='hidden'
                  animate='visible'
                  className={
                    'h-auto w-full cursor-pointer  hover:scale-125 hover:border-white hover:border ' +
                    Genre.gradient
                  }
                  onClick={() => {
                    handleOnClick(Genre.name);
                  }}
                >
                  <span>
                    <h3
                      className={
                        'text-white font-Archivo font-bold text-left p-[2rem] text-xl uppercase text-bold' +
                        Genre.gradient
                      }
                    >
                      {Genre.name}
                    </h3>
                  </span>
                </motion.div>
              ))}
            </>
          ) : (
            <Cards books={bookData} />
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;



