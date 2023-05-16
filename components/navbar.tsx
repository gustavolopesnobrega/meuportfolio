'use client'
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import gnlogo from '../public/gustavonobregalogo.png'
import Image from 'next/image';
import Link from 'next/link';

function NavBar() {
  
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='  text-gray-400 flex-col bg-zinc-900 overflow-x-hidden '>
          <nav className=" flex justify-between gap-10 md:py-6 md:flex md:justify-center">
            <div className=' w-60 md:hidden py-5 ml-4 '>
              <Link href={'/'}><Image src={gnlogo} alt='logo'></Image></Link>
              
            </div>
            <div className={` absolute right-0 top-0 text-black flex justify-between bg-white w-full h-full transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <ul className=' flex flex-col p-10 text-xl justify-evenly max-h-screen '>
                <Link href={"/"} className=' border-b-2 divide-slate-700 '>INICIO</Link>
                <Link href={"/projetos"} className=' border-b-2 divide-slate-900'>PROJETOS</Link>
                <Link href={"/contato"} className=' border-b-2 divide-slate-200'>CONTATO</Link>
                <Link href={"https://drive.google.com/u/0/uc?id=1z3EVjeKcGlS-pJRZnjMQ_Tut5__2Ig3H&export=download"} className=' border-b-2 divide-slate-200'>DOWNLOAD CV</Link>
              </ul>
            </div>

            <ul className=' hidden md:flex mx-4 gap-2 md:px-24 lg:px-48 md:gap-16 '>
                <li className='md:hover:text-slate-50' >
                    <a href="/">INICIO </a>
                  </li>
                  
                  <li className='md:hover:text-slate-50'>
                    <a href={"/projetos"}>PROJETOS</a>
                  </li>
                  <li className='md:hover:text-slate-50'>
                    <a href={"/contato"}>CONTATO</a>
                  </li>
                  <li className=' bg-gradient-to-tr from-sky-600 to-sky-900 text-slate-200 rounded-md min-w-fit '>
                    <a href="https://drive.google.com/u/0/uc?id=1z3EVjeKcGlS-pJRZnjMQ_Tut5__2Ig3H&export=download" target='_blank' className=' font-sans px-2 '>Download CV</a>
                  </li>
                
              </ul>
              <div className=' md:hidden mt-2 mr-4'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
          </nav>
          
        </div>
  
  );
}

export default NavBar;
