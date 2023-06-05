import React from 'react'
import { useState } from 'react';
import logo from '../images/archimedes_logo.svg'
import {FiMenu} from 'react-icons/fi';
import './styles/navbar.css';


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3 h-[10%] bg-[#DCCFC0] rounded-full mt-[2rem]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between bg-[#DCCFC0]">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start bg-[#DCCFC0]">
          <img src={logo} className='p-[2rem] bg-[#DCCFC0] hide-in-mobile' height={"200px"} width={"200px"} />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none bg-[#DCCFC0]"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <FiMenu className='text-[#080A22]' />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              
                            
            <li className="font-Lato ">
                <a
                  className=" flex items-center text-xl   uppercase leading-snug"
                  href="/"
                >
                  <span className=" px-3 py-2 rounded-full hover:bg-[#202975]  text-[#080A22]text-xl font-Lato">HOME</span>
                </a>
              </li>
              <li className="font-Lato ">
                <a
                  className=" flex items-center text-xl   uppercase leading-snug"
                  href="/search"
                >
                  <span className=" px-3 py-2 rounded-full hover:bg-[#202975]  text-[#080A22]text-xl font-Lato">SEARCH</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" flex items-center text-xl uppercase  leading-snug "
                  href="/about"
                >
                  <span className="px-3 py-2 rounded-full hover:bg-[#202975] text-[#080A22]text-xl font-Lato ">ABOUT</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" flex items-center text-xl uppercase  leading-snug "
                  href="/categories"
                >
                  <span className="px-3 py-2 rounded-full hover:bg-[#202975] text-[#080A22]text-xl font-Lato">CATEGORIES</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}