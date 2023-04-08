import React from 'react'
import Landing from './landing'

const Card =({books})=>{
  if(books.length!=0){
    return(
      <>
        <div className='container mx-auto py-36 px-8 '>
        <div className='grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-[3rem]'>
      {books.map(book=>(
        <div className=' container rounded-lg  bg-[#202975] hover:scale-125'>
          <div className='block object-cover  w-full'>
        <img className="mx-auto" src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}></img>
        </div>
        <h3 className='text-lg font-Archivo font-bold	 text-left text-[#DEB992] p-[1rem] overflow-clip'>{book.volumeInfo.title}</h3>
        <h3 className='text-lg text-left text-[#DEB992] p-[1rem] overflow-hidden'>{book.volumeInfo.authors}</h3>
      </div>

      ))}
          </div>
    </div>
    </>
    )}
  else{
    return(
      <>
      <Landing />
      </>
    )
  }
  }

export default Card
