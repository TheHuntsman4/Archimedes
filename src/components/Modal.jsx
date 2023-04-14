import React, { useState } from "react";
import "./Modal.css";
import {ReactComponent as Icon1} from '../images/book-opened-svgrepo-com.svg'
import BookIcon from '../images/book-opened-svgrepo-com.svg';
import axios from "axios";

export default function Modal({title,author,image,preview}) {

  let [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = ({title}) => {
    const prompt=("extremley detailed notes  on " +title+" by "+author)
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
    
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setResponse("");
    setModal(!modal);
  };
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
        <div className='rounded-lg h-[30rem] w-auto  bg-[#202975] hover:scale-[1.1] ' onClick={toggleModal} >
          <img className="mx-auto  p-[2rem] h-[15rem] w-[11rem] " src={image}  ></img>
          <div className='block object-cover  w-full'></div>
          <div className='flex justify-left  h-[5vh] w-[12.5%]' ></div>
          <div className='text-[5.25vw] md:text-[2vh] lg:text-[1.25vw] font-Archivo font-bold	 text-left text-[#DEB992] p-[1rem] ' ><a target="_blank" href={preview}>{title}</a></div>
          <div className=' sm:content md:content text-[4vw] md:text-[2vh] text-left text-[#DEB992] p-[1rem] overflow-clip'>{author}</div>
      </div>



      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="fixed h-100% w-100% bg-black  opacity-[60%] top-0 left-0 right-0 bottom-0"></div>

          

          <div className="absolute top-1/2 left-1/2 bg-[#202975] text-[#DEB992] -translate-x-1/2 -translate-y-1/2 w-[full] h-[50%] w-auto overflow-y-auto p-[2rem]">
          <div className="grid lg:grid-cols-2 gap-2 p-[1rem] sm:grid-cols-1">
            <div><img src={image} className="h-300px w-[200px]"/></div>
            <div className="text-center uppercase text-[2rem] font-Roboto">{title}
            <div className="text-center uppercase text-[2vh] p-[1rem] font-Archivo">{author}</div>
            <div className="text-center uppercase text-[2rem] font-Archivo"><a target="_blank" href={preview}>Live Link</a></div>
            </div>
            
            </div>
            <button onClick={()=>handleSubmit({title})}>Generate</button>
            <div className={response ?"text-[#DEB992] my-auto text-[2vh] text-left "  :"text-[#DEB992] text-[2vh] text-center "}>{response ? response : "Click the Generate button to generatae notes"}</div>
            
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
  
    </>
  );
}