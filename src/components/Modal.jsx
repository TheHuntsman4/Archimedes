import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { ReactComponent as Cross} from '../images/cross.svg'
import Spinner from "./Spinner.tsx";

export default function Modal({title,author,image,preview,description}) {

  let [response, setResponse] = useState("");
  const HTTP = "http://localhost:8008/chat";

  const handleSubmit = ({title}) => {
    const prompt=("chapter-wise notes on " +title+" by "+author)
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
          <div className='text-[5.25vw] md:text-[2vh] lg:text-[1.25vw] font-Archivo font-bold	 text-left text-[#DEB992] p-[1rem] ' >{title}</div>
          <div className=' sm:content md:content text-[4vw] md:text-[2vh] text-left text-[#DEB992] p-[1rem] overflow-clip'>{author}</div>
      </div>



      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="fixed h-100% w-100% bg-black  opacity-[60%] top-0 left-0 right-0 bottom-0"></div>

          

          <div className="absolute top-1/2 left-1/2 bg-[#0C1039] text-[#DEB992] -translate-x-1/2 -translate-y-1/2  h-[50%] w-auto overflow-y-auto overflow-x-hidden p-[2rem] rounded-lg ">
          <div className="grid lg:grid-cols-2 gap-2 p-[1rem] sm:grid-cols-1"> 
            <div><img src={image} className=" h-[17rem] w-[12rem] lg:h-[25rem] lg:w-[12rem]"/></div>
            <div className="text-left uppercase font-bold text-[2rem] font-Roboto">{title}
            <div className="text-left  uppercase font-weight text-[2vh] pt-[1rem] pb-[1rem] font-Archivo">{author}</div>
            <div className="text-left uppercase text-[1rem] pb-[1rem] font-Archivo"><a target="_blank" href={preview}>Live Preview Link</a></div>
            <div className="text-left text-[1rem] font-Archivo">{description ? description : "Description unavailable"}</div>
            </div>
            
            </div>
            <button className="text-[1.5rem] bg-[#0C1039] rounded-full p-[1vh] hover:bg-[#DEB992] hover:text-[#0C1039]"
              onClick={()=>handleSubmit({title})}>
                Generate
            </button>
            <div className={response ?"text-[#DEB992] my-auto text-[2vh] text-left"  :"text-[#DEB992] text-[2vh] text-center "}>{response ? response : "Click the 'Generate' button to generate notes for this book "}</div>
            
            <button className="close-modal" onClick={toggleModal}>
            <Cross className=" translate-x-1/2 h-[20px]"/> 
            </button>
          </div>
        </div>
      )}
  
    </>
  );
}