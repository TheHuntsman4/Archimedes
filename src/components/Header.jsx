import React from 'react';
import {ReactComponent as Icon1} from '../images/Mediamodifier-Design (21).svg';

const buttons=[{name:"HOME",link:"#"},{name:"ABOUT",link:"#"},{name:"CATEGORIES",link:"#"}];


const NavButton=({name,link})=>{
  return(
    <div className='hidden sm:ms-[2rem] sm:inline-block px-[3rem] py-[1rem] rounded-full bg-[#0C1039] font-Roboto text-[#DEB992] hover:bg-[#202975] hover:text-teal-400 '>
      <a href={link}>{name}</a>
    </div>
  )

};

const Header = () => {
  return (
    <div className='w-full mb-[3rem] '>
      <Icon1 className='w-full  bg-[#0C1039] '/>
        <div className='sm:float-left bg-[#0C1039] w-full inline-block sm:mt-[-rem] py-8'>
            <div className='sm:float-left'>
              {buttons.map((button)=>
                <NavButton name={button.name} link={button.link} />
              )
              }
              </div>
              <div className=" mx-[4rem] sm:mx-[2rem] sm:px-[5rem] max-[860px]:mx-auto  py-[1rem] rounded-full bg-[#202975] text-[#DEB992] hover:text-teal-400 sm:float-right block">
                Search Bar
              </div>
        </div>
      
    </div>
  )
}

export default Header;
