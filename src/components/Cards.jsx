import React from 'react'
import Landing from '../pages/landing'
import Modal from './Modal'



const Cards =({books})=>{
    
  return (
    <>
        {
            books.map((book) => {
                let thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                if(thumbnail!= undefined)
                {
                    return (
                        <>
                        <Modal title={book.volumeInfo.title} author={book.volumeInfo.authors} image={thumbnail} preview={book.volumeInfo.previewLink} description={book.volumeInfo.description}/>
                        </>
                    )
                }
                
            })
        }

    </>

  )
      }
export default Cards;
