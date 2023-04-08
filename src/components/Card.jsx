import React from 'react'

const Card =({books})=>{
  console.log(books)
  
    return(
      <>
      {books.map(book=>(
        <div className='rounded-lg  bg-[#202975] hover:scale-125'>
        <img className="block w-1/2 mr-auto ml-auto my-[1rem]" src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}></img>
        <h3 className='text-lg font-Archivo font-bold	 text-left text-[#DEB992] p-[1rem] '>{book.volumeInfo.title}</h3>
        <h3 className='text-lg text-left text-[#DEB992] p-[1rem]'>{book.volumeInfo.authors}</h3>
      </div>
      ))}
    </>
    )
  }

export default Card
