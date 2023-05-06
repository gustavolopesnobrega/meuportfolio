
import { Inter } from 'next/font/google'

import Image from 'next/image'

import localizadorcep from '/public/buscadorcepimg.png'
import pinterest from '/public/pinterestclonedesign.png'
import bugtrackerimg from '/public/bugtracker.jpg'
import {FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss, SiMicrosoftsqlserver, SiCss3} from 'react-icons/si'
import NavBar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Projetos() {
  return (
    <main className=" w-full h-fit bg-cover bg-hero-pattern text-black pb-2 ">
     <section className="  min-h-screen">
     <NavBar></NavBar>
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

