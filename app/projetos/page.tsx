
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image'
import logo from '/Users/USER/myportifolionext13/public/gndevlogo.svg'
import Link from 'next/link'
import localizadorcep from '/Users/USER/myportifolionext13/public/buscadorcepimg.png'
import pinterest from '/Users/USER/myportifolionext13/public/pinterestclonedesign.png'
import bugtrackerimg from '/Users/USER/myportifolionext13/public/bugtracker.jpg'
import {FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss, SiMicrosoftsqlserver, SiCss3} from 'react-icons/si'

const inter = Inter({ subsets: ['latin'] })

export default function Projetos() {
  return (
    <main className=" w-full h-fit bg-cover bg-hero-pattern text-black pb-2 ">
     <section className="  min-h-screen">
     <div className=' text-gray-400 flex-col bg-zinc-900'>
          <nav className="py-6 px-4 flex justify-around align-middle">
          <ul className=' flex justify-between mx-4 gap-10 md:px-24 lg:px-48 '>
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
          </nav>
        </div>
        <div className=' text-black-800 lg:flex gap-10 md:py-10 lg:m-20'>
          <div className=' bg-white shadow-2xl py-8 px-8 rounded-xl my-10  max-w-max justify-center mx-auto md:hover:p-10 ease-in duration-200 cursor-pointer' >
            <div >
              <a href="https://buscador-de-cep-ten-iota.vercel.app/" target='_blank'><Image src={localizadorcep} alt="Buscador de CEP imagem" className=' rounded-3xl max-w-xs mx-auto w-56 md:w-80 ' /></a>
            </div>
            <p className=' text-gray text-center mx-auto text-2xl py-6'>Localizador de CEP </p>
            
          </div>
          <div className=' bg-white shadow-2xl py-8 px-8 rounded-xl my-10  max-w-max justify-center mx-auto md:hover:p-10 ease-in duration-200 cursor-pointer' >
            <div >
              <Image src={pinterest} alt="Buscador de CEP imagem" className=' rounded-3xl max-w-xs mx-auto w-56 md:w-80 ' />
            </div>
            <p className=' text-gray text-center mx-auto text-2xl py-6 md:mt-24'>Pinterest Clone Design</p> 
          </div>
          <div className=' bg-white shadow-2xl py-8 px-8 rounded-xl my-10  max-w-max justify-center mx-auto md:hover:p-10 ease-in duration-200 cursor-pointer' >
            <div >
              <a href="https://github.com/gustavolopesnobrega/BugTracker" target='_blank'><Image src={bugtrackerimg} alt="Buscador de CEP imagem" className=' rounded-3xl max-w-xs mx-auto w-56 md:w-80 ' /></a>
            </div>
            <p className=' text-gray text-center mx-auto text-2xl py-6 md:mt-40'>BugTracker Clone  Design</p>
          </div>
          
        </div>
        
        <div className=' bg py-10'>
          <h3 className=' flex justify-center text-5xl py-20 text-sky-600'>Tecnologias</h3>
          <div className=' text-gray-400 lg:flex text-center'>
            <div className=' bg-slate-900 w-96 min-w-6 p-4 my-10 rounded-2xl shadow-2xl flex-col max-w-fit mx-auto justify-between  '>
              <FaReact className=' text-6xl'/>
              <p className=' pt-4'>ReactJS</p>
            </div>
            <div className=' bg-slate-900 w-96 min-w-6 p-4 my-10 rounded-2xl shadow-2xl flex-col max-w-fit mx-auto justify-between  '>
              <IoLogoJavascript className=' text-6xl'/>
              <p className=' pt-4'>JavaScript</p>
            </div>
            <div className=' bg-slate-900 w-96 min-w-6 p-4 my-10 rounded-2xl shadow-2xl flex-col max-w-fit mx-auto justify-between  '>
              <SiTailwindcss className=' text-6xl'/>
              <p className=' pt-4'>Tailwind</p>
            </div>
            <div className=' bg-slate-900 w-96 min-w-6 p-4 my-10 rounded-2xl shadow-2xl flex-col max-w-fit mx-auto justify-between  '>
              <SiCss3 className=' text-6xl'/>
              <p className=' pt-4'>CSS</p>
            </div>
            <div className=' bg-slate-900 w-96 min-w-6 p-4 my-10 rounded-2xl shadow-2xl flex-col max-w-fit mx-auto justify-between  '>
              <SiMicrosoftsqlserver className=' text-6xl ml-3'/>
              <p className=' pt-4'>SQL Server</p>
            </div>
          </div>
        
        </div>
     </section>
     
    </main>
  )
}

