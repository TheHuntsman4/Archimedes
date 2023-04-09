import React from 'react'
import Landing from './landing'

const Card =({books})=>{
    return(
      <>
      {books.map(book=>(
        <div className='rounded-lg h-auto w-auto  bg-[#202975] hover:scale-110 md:hover:scale-175 '>
          <div className='block object-cover  w-full'>
        <img className="mx-auto mt-[2rem]" src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}></img>
      </div>
        <h3 className='text-lg font-Archivo font-bold	 text-left text-[#DEB992] p-[1rem] overflow-clip'>{book.volumeInfo.title}</h3>
        <h3 className=' sm:content md:content text-sm text-left text-[#DEB992] p-[1rem] overflow-clip'>{book.volumeInfo.authors}</h3>
      </div>

      ))}
</>
)}
export default Card