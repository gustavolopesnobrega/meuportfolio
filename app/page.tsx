
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'
import Image from 'next/image'
import perfil from '../public/perfil.jpg'
import buscadorcep from '../public/buscadorcepimg.png'
import pinterestimg from '../public/pinterestclonedesign.png'
import bugtrackerimg from '../public/bugtracker.jpg'
import logo from '../public/gndevlogo (2).svg'
import {FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss, SiMicrosoftsqlserver, SiCss3} from 'react-icons/si'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=" w-full h-fit bg-cover bg-hero-pattern text-black pb-2 ">
     <section className=" min-h-screen"  >
      <div className=' text-gray-400 flex-col bg-zinc-900'>
          <nav className="py-6 px-4 flex justify-around align-middle md:m-auto lg:m-auto">
           
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

       
        <div  className=' px-10 flex-col justify-center lg:flex md:my-8 md:flex-row'>
            <div className=' py-10 text-center max-w-3xl mx-auto mt-6 md:text-xl md:text-left md:mx-20 lg:mx-40 '>
                <h1 className=' text-5xl font-semibold  py-2 text-sky-600'>Gustavo Nobrega</h1>
                <h2 className=' text-2xl py-2'>Front-End Web Developer</h2>
                <p className=' leading-8 text-gray md:max-h-76 '>Sou um desenvolvedor front-end apaixonado por criar soluções criativas e inovadoras, capaz de criar interfaces de usuário elegantes, funcionais e responsivas, que proporcionam uma experiência excepcional aos usuários finais. <br /> <br /> Quando não estou trabalhando, gosto de praticar kitesurfing, assistir videos e seriados.</p>
                <a  href={"/projetos"}><button className=' bg-sky-600 w-28 h-16 rounded-2xl mt-16 text-xl text-white hover:bg-sky-900 ease-in duration-200'>Projetos</button></a>
            </div> 

          <div className=' hidden lg:flex lg:min-w-max'>
            <Image src={perfil} alt='foto de gustavo' className=' rounded-3xl w-60 h-60 mt-36 shadow-xl shadow-sky-900'></Image>
          </div>

            
        </div>
        <div className=' text-3xl py-6 gap-10 text-gray md:text-4xl md:justify-normal md:mx-20 md:mt-10 lg:mx-40'>
                <ul className=' flex justify-center gap-10 align-middle'>
                  <a href="https://www.linkedin.com/in/gustavo-nobrega-514845187/" target='_blank'><AiFillLinkedin className=' ml-1'/><p className=' text-sm py-2'>Linkedin</p></a>
                  <a href="https://github.com/gustavolopesnobrega" target='_blank'><AiFillGithub className=' ml-1'/><p className=' text-sm py-2'>Github</p></a>
                  <a href="https://api.whatsapp.com/send?phone=5583986377342" target='_blank'><AiOutlineWhatsApp className=' ml-2'/><p className=' text-sm text-gray-700 py-2'>WhatsApp</p></a>
              
                </ul>
                
            </div>
      </section>
    </main>
  )
}

