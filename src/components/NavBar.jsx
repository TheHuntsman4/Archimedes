import React from 'react'
import { useState } from 'react';
import logo from '../images/Mediamodifier-Design (21).svg'
import {FiMenu} from 'react-icons/fi';


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#0C1039] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <img src={logo} width={220} height={55} />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <FiMenu className='text-[#deb992]' />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className=" flex items-center uppercase leading-snug"
                  href="#pablo"
                >
                  <span className=" px-3 py-2 rounded-full hover:bg-[#202975]  text-[#DEB992] text-xl font-Roboto">HOME</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" flex items-center text-xl uppercase  leading-snug "
                  href="#pablo"
                >
                  <span className="px-3 py-2 rounded-full hover:bg-[#202975] text-[#DEB992] text-xl font-Roboto ">ABOUT</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" flex items-center text-xl uppercase  leading-snug "
                  href="#pablo"
                >
                  <span className="px-3 py-2 rounded-full hover:bg-[#202975] text-[#DEB992] text-xl font-Roboto">CATEGORIES</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}