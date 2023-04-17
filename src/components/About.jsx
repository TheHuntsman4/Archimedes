import React from 'react'
import confused_man from '../images/confused_man.svg'
import logo from '../images/ARCHIMEDES.png'


const About = () => {
  return (
    <div>
        <div className=' text-[#DEB992] text-[2rem] text-left font-Lato w-full p-[2rem]'>
          About
        </div>
        <div className='grid grid-cols-1 '>
            <div className='mx-auto  '>
                <img src={confused_man} className='align-center h-[25vh] w-[80vh]'/>
            </div>
            <div className='text-[2vh] text-left p-[2rem] md:px-[30rem] font-Roboto text-[#DEB992]'>
            Ever read a book and forgot about the contents after a while?
            To find more data about it maybe you might've Googled it and to your utter dissapointment found nothing, and God forbid, found it but it ended being something you had to pay for. </div>
            <div className='mx-auto  '>
                <img src={logo} className='align-center h-[35vh] w-[80vh]'/>
            </div>
            <div className='text-[2vh] text-left p-[2rem] md:px-[30rem] font-Roboto text-[#DEB992]'>
              Introducing Archimedes, the AI-Powered book assistant. Use the search bar or categories to browse the extensive library. Use the Generate function to generate detailed chapter-wise summaries and notes for the book of your choice. All powered by AI.


            </div>
            
        </div>      
    </div>
  )
}

export default About