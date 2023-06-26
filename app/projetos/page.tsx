
import { Inter } from 'next/font/google'
import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTailwindcss, SiMicrosoftsqlserver, SiCss3 } from 'react-icons/si'
import NavBar from '@/components/navbar'
import CardCim from './project-componets/cardcim'
import CardCep from './project-componets/cardcep'
import CardPinterest from './project-componets/cardpinterest'
import CardBugTracker from './project-componets/bugtracker'



const inter = Inter({ subsets: ['latin'] })

export default function Projetos() {
  return (
    <main className=" h-full bg-white text-black pb-2 overflow-x-hidden ">
      <section className=" min-h-screen relative "  >
        <NavBar></NavBar>
        <div className=' text-black-800 flex-col lg:flex gap-10 md:py-10 lg:m-10 margin-auto'>
          <h1 className='flex justify-center py-10 text-2xl font-semibold '>Work</h1>
          <div className=' flex flex-wrap justify-center md:justify-center lg:justify-center'>
            <CardCim></CardCim>
            <CardCep></CardCep>
            <CardPinterest></CardPinterest>
            <CardBugTracker></CardBugTracker>

          </div>

        </div>

        <div className=' bg py-10'>
          <h3 className=' flex justify-center text-5xl py-20 text-sky-600'>Tecnologias</h3>
          <div className=' text-gray-400 lg:flex text-center'>
            <div className=' bg-slate-900 w-96 min-w-6 p-4 my-10 rounded-2xl shadow-2xl flex-col max-w-fit mx-auto justify-between  '>
              <FaReact className=' text-6xl' />
              <p className=' pt-4'>ReactJS</p>
            </div>
            <div className=' bg-slate-900 w-96 min-w-6 p-4 my-10 rounded-2xl shadow-2xl flex-col max-w-fit mx-auto justify-between  '>
              <IoLogoJavascript className=' text-6xl' />
              <p className=' pt-4'>JavaScript</p>
            </div>
            <div className=' bg-slate-900 w-96 min-w-6 p-4 my-10 rounded-2xl shadow-2xl flex-col max-w-fit mx-auto justify-between  '>
              <SiTailwindcss className=' text-6xl' />
              <p className=' pt-4'>Tailwind</p>
            </div>
            <div className=' bg-slate-900 w-96 min-w-6 p-4 my-10 rounded-2xl shadow-2xl flex-col max-w-fit mx-auto justify-between  '>
              <SiCss3 className=' text-6xl' />
              <p className=' pt-4'>CSS</p>
            </div>
            <div className=' bg-slate-900 w-96 min-w-6 p-4 my-10 rounded-2xl shadow-2xl flex-col max-w-fit mx-auto justify-between  '>
              <SiMicrosoftsqlserver className=' text-6xl ml-3' />
              <p className=' pt-4'>SQL Server</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}

