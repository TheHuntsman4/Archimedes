import React from 'react'
import Landing from './landing'
import Single_Card from './Single_Card'



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
                        <Single_Card title={book.volumeInfo.title} author={book.volumeInfo.authors} img1={thumbnail} preview={book.volumeInfo.previewLink} />
                        </>
                    )
                }
                
            })
        }

    </>

  )
      }
export default Cards;
