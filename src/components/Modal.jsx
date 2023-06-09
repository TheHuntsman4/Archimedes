import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { ReactComponent as Cross} from '../images/cross.svg'

export default function Modal({title,author,image,preview,description}) {

  let [response, setResponse] = useState("");
  const HTTP = "http://localhost:8008/chat";

  const handleSubmit = ({title}) => {
    const prompt=("summary in 200 words for the book " +title)
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
      if(response.length=0){
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
      {/* Note: the comment div is a prototype which calls both toggleModal and handleSubmit functions */}
      {/* <div className="grid md:grid-cols-2 grid-cols-1 justify-center align-middle rounded-lg bg-[#202975] p-[2rem] ease-in-out duration-300 hover:scale-[1.15] shadow-2xl shadow-black" onClick={()=>{toggleModal();handleSubmit(title);}}> */}
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center align-middle rounded-lg bg-gradient-to-b from-[#1269af] to-transparent p-[2rem] ease-in-out duration-300 hover:scale-[1.15] shadow-2xl shadow-black" onClick={()=>{toggleModal()}}>
        <img className="h-[10rem] w-[50%] md:w-full justify-self-center place-items-center" src={image}></img>
        <div className="flex flex-col justify-start align-middle">
          <p className="text-[1rem] md:text-[2vh] lg:text-[1.25vw] font-Archivo font-bold text-left text-[#DEB992] px-[1.5rem] ">{title.length>20 ? title = title.substring(0, 20)+"..." : title=title}</p>
          <p className="sm:content md:content text-[4vw] md:text-[2vh] text-left text-[#DEB992] px-[1.5rem] overflow-clip">{author}</p>
        </div>
      </div>


      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="fixed h-100% w-100% bg-black  opacity-[60%] top-0 left-0 right-0 bottom-0"></div>

          

          <div className="absolute top-1/2 left-1/2 bg-[#0C1039] text-[#DEB992] -translate-x-1/2 -translate-y-1/2  h-[50%] w-auto overflow-y-auto overflow-x-hidden p-[2rem] rounded-lg ">
          <div className="grid lg:grid-cols-2 gap-2 p-[1rem] sm:grid-cols-1"> 
            <div><img src={image} className=" h-[17rem] w-[14rem] lg:h-full lg:w-full pr-[1rem] rounded-lg"/></div>
            <div className="text-left uppercase font-bold text-[2rem] font-Roboto">{title}
            <div className="text-left  uppercase font-weight text-[2vh] pt-[1rem] pb-[1rem] font-Archivo">{author}</div>
            <div className="text-left uppercase text-[1rem] pb-[1rem] font-Archivo"><a target="_blank" href={preview}>Live Preview Link</a></div>
            <div className="text-left text-[1rem] font-Archivo">{description ? description : "Description unavailable"}</div>
            </div>
            
            </div>
            <button className="text-[1.5rem] bg-[#0C1039] rounded-full p-[1vh] hover:bg-[#DEB992] hover:text-[#0C1039]"
              onClick={()=>handleSubmit({title})} >
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