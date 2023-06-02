import React from 'react'

const Footer = () => {
  return (
<footer className="bg-[#0c1039]">
      <div className="grid container grid-cols-1 mx-auto py-12 px-4">
        <div className=" flex text-[#deb992] text-left">
          The source code is available at  <a href="https://github.com/TheHuntsman4/Archimedes" target='_blank'>
            <img className=" bg-[#deb992] h-[5rem] w-[5rem]" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" /></a>
          
        </div>
      </div>
    </footer> 
  )
}

export default Footer;
