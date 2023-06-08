import React from 'react'
import { useState } from 'react';
import logo from '../images/archimedes logo beige.svg'
import {FiMenu} from 'react-icons/fi';
import './styles/navbar.css';


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between  mb-3 h-[10%]  md:rounded-full mt-[2rem]">
        <div className="container px-4 mx-auto flex flex-col items-center justify-evenly">
          <div className="w-full relative flex justify-evenly lg:w-auto lg:static lg:block lg:justify-start">
          <img src={logo} className='pb-[1rem]  hide-in-mobile' height={"200px"} width={"200px"} />
            <button
              className="text-white cursor-pointer text-[1.5rem] leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none bg-[#DCCFC0]"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <FiMenu className='text-[#deb992]' />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-evenly" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              
                            
            <li className="font-Lato ">
                <a
                  className=" flex items-center text-xl   uppercase leading-snug"
                  href="/"
                >
                  <span className=" px-3 py-2 rounded-full   text-[#deb992] text-xl font-Lato  ease-in-out duration-300 hover:scale-[1.15]">HOME</span>
                </a>
              </li>
              <li className="font-Lato ">
                <a
                  className=" flex items-center text-xl   uppercase leading-snug"
                  href="/search"
                >
                  <span className=" px-3 py-2 rounded-full   text-[#deb992] text-xl font-Lato  ease-in-out duration-300 hover:scale-[1.15]">SEARCH</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" flex items-center text-xl uppercase  leading-snug "
                  href="/about"
                >
                  <span className="px-3 py-2 rounded-full  text-[#deb992] text-xl font-Lato  ease-in-out duration-300 hover:scale-[1.15] ">ABOUT</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" flex items-center text-xl uppercase  leading-snug "
                  href="/categories"
                >
                  <span className="px-3 py-2 rounded-full   text-[#deb992] text-xl font-Lato  ease-in-out duration-500 hover:scale-[1.15]">CATEGORIES</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr size="10px"/>
    </>
  );
}