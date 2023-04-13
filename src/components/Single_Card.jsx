import React from 'react'
import ChatGPT from './chatgpt'
import axios from 'axios';
import { useState } from 'react';
import Popup from './Popup';
import Modal from './Modal';
import BookIcon from '../images/book-opened-svgrepo-com.svg';



const Single_Card = ({title,author,img1,preview}) => {

const handleClick = () =>{
  return(
    <Modal />
  )
}
  const name=title;
  const writer=author;
  console.log("this is the name ",name)
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
        <div className='rounded-lg h-auto w-auto  bg-[#202975]  '>
          <div className='block object-cover  w-full'>
        <img className="mx-auto mt-[2rem] h-[15rem] w-[11rem]" src={img1} onClick={()=>handleSubmit({title})} ></img>
      </div>
      
        <div className='flex justify-left  h-[5vh] w-[12.5%]' ><Modal title={name} author={writer} image={img1} preview={preview}/></div>
        <h3 className='text-[5.25vw] md:text-[2vh] lg:text-[1.25vw] font-Archivo font-bold	 text-left text-[#DEB992] p-[1rem] ' ><a target="_blank" href={preview}>{title}</a></h3>
        <h3 className=' sm:content md:content text-[4vw] md:text-[2vh] text-left text-[#DEB992] p-[1rem] overflow-clip'>{author}</h3>
      </div>
    </>
  )
}

export default Single_Card
