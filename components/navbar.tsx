'use client'
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import gnlogo from '../public/logoglobogn.png'
import Image from 'next/image';
import Link from 'next/link';
import {AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'

function NavBar() {
  
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='  text-black flex-col bg-white overflow-x-hidden '>
          <nav className=" flex justify-between  gap-10 md:py-6 md:flex md:justify-center lg:justify-between lg:px-10 ">
            <div className=' w-24 ml-4 flex pt-4 md:pt-0 lg:pt-0'> 
              <Link href={'/'}><Image src={gnlogo} alt='logo'></Image></Link>
            </div>
            <div className={` absolute right-0 top-0 text-black flex justify-between bg-white w-full h-full transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <ul className=' flex flex-col p-10 text-xl justify-evenly max-h-screen '>
                <Link href={"/projetos"} className=' border-b-2 divide-slate-900'>work</Link>
                <Link href={"/contato"} className=' border-b-2 divide-slate-200'>contact</Link>
                <Link href={"https://drive.google.com/u/0/uc?id=1z3EVjeKcGlS-pJRZnjMQ_Tut5__2Ig3H&export=download"} className=' border-b-2 divide-slate-200'>CURRICULO</Link>
              </ul>
            </div>  
            <ul className=' hidden md:flex mx-4 gap-2 md:px-24 lg:px-48 md:gap-16 font-medium py-2 lg:text-lg '>
                  <li className='md:hover:text-dots-blue '>
                    <a href={"/projetos"}>work</a>
                  </li>
                  <li className='md:hover:text-dots-blue'>
                    <a href={"/contato"}>contact</a>
                  </li>
                  <li className=' text-black md:hover:text-dots-blue'>
                    <a href="https://drive.google.com/u/0/uc?id=1z3EVjeKcGlS-pJRZnjMQ_Tut5__2Ig3H&export=download" target='_blank' className=' font-sans px-2 '>resume</a>
                  </li>
                
              </ul>
              <div className=' text-3xl py-0 gap-10 text-gray md:text-xl md:justify-normal md:mx-0 md:mt-0 lg:mx-0 hidden lg:flex lg:py-2'>
                <ul className=' flex justify-center gap-10 align-middle '>
                  <a href="https://www.linkedin.com/in/gustavo-nobrega-514845187/" target='_blank'><AiFillLinkedin className=' ml-1 hover:text-dots-blue'/></a>
                  <a href="https://github.com/gustavolopesnobrega" target='_blank'><AiFillGithub className=' ml-1 hover:text-dots-blue'/></a>
                  <a href="https://api.whatsapp.com/send?phone=5583998601573" target='_blank'><AiOutlineWhatsApp className=' ml-2 hover:text-dots-blue'/></a>
              
                </ul>
                
            </div>
              <div className=' md:hidden mt-2 mr-4'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
          </nav>
          
        </div>
  
  );
}

export default NavBar;
