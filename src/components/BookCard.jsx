import { useState,React}  from 'react';
import Card from './Card';
import Search from './Search'  ;

const Books=[{title:"something", author:"someone",image:"/home/the_architect/Personal/MyBookList/mybooklist/public/assests/books/foo.jpg"},
{title:"something", author:"Id deserunt dolore quis magna id fugiat eiusmod exercitation cupidatat ad.",image:'/home/the_architect/Personal/MyBookList/mybooklist/public/assests/books/foo.jpg'},
{title:"something", author:"Ipsum fugiat est do irure Lorem est nisi laborum ullamco.",image:'/home/the_architect/Personal/MyBookList/mybooklist/public/assests/books/foo.jpg'},
{title:"something", author:"Nulla cillum non irure incididunt ullamco incididunt aliqua reprehenderit mollit excepteur ea adipisicing est.",image:'/home/the_architect/Personal/MyBookList/mybooklist/public/assests/books/foo.jpg'},
{title:"something", author:"Ipsum fugiat est do irure Lorem est nisi laborum ullamco.",image:'/home/the_architect/Personal/MyBookList/mybooklist/public/assests/books/foo.jpg'},
{title:"something", author:"Ipsum fugiat est do irure Lorem est nisi laborum ullamco.",image:'/home/the_architect/Personal/MyBookList/mybooklist/public/assests/books/foo.jpg'},
{title:"something", author:"Ipsum fugiat est do irure Lorem est nisi laborum ullamco.",image:'/home/the_architect/Personal/MyBookList/mybooklist/public/assests/books/foo.jpg'},
{title:"something", author:"Ipsum fugiat est do irure Lorem est nisi laborum ullamco.",image:'/home/the_architect/Personal/MyBookList/mybooklist/public/assests/books/foo.jpg'},
{title:"something", author:"Ipsum fugiat est do irure Lorem est nisi laborum ullamco.",image:'/home/the_architect/Personal/MyBookList/mybooklist/public/assests/books/foo.jpg'}]


const BookCard = () => {

  return (
    
    <div className='container mx-auto py-36 px-8 '>
      <div className='grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-[3rem]'>
        
      </div>
    </div>
  )
}

export default BookCard

  