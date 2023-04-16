import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Modal from './Modal';
import BookIcon from '../images/book-opened-svgrepo-com.svg';



const Single_Card = ({title,author,img1,preview}) => {

  const name=title;
  const writer=author;
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";
  


      const handleSubmit = ({title,author}) => {
        const prompt=("20 point on " +title+" by "+author)
        axios
          .post(`${HTTP}`, { prompt })
          .then((res) => {
            console.log(res.data);
            setResponse(res.data)
            console.log(prompt);
          })
          .catch((error) => {
            console.log(error);
          });
          if(response.length!=0){
            console.log(response)
 
          }  
      }
    
      
        
  return (
    
    <>
        <Modal title={name} author={writer} image={img1} preview={preview}/> 
    </>
  )
}

export default Single_Card
