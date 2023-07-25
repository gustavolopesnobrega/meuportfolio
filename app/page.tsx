'use client'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import perfil from '../public/gnblackwhitewitheffect.png'
import NavBar from '@/components/navbar'


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <main className=" h-full bg-white text-black pb-2 overflow-x-hidden ">
      <section className=" min-h-screen relative "  >
        <NavBar></NavBar>
        <div className='flex flex-col py-10 lg:flex-row lg:justify-center lg:px-60 lg:py-10 '>
          <div className=' flex justify-center lg:flex lg:min-w-max lg:mt-5'>
            <Image src={perfil} alt='foto de gustavo' className=' h-80 w-auto lg:h-[40rem]'></Image>
          </div>
          <div className='flex flex-col gap-4 justify-center px-20 md:text-xl '>
            <h1 className=' text-4xl font-semibold  py-2 lg:text-5xl text-black'>Hi, I'm Gustavo Nobrega and </h1>
            <h2 className=' text-4xl font-semibold  py-2 lg:text-5xl text-black '>I'm a Front-End Web Developer</h2>
            <p className=' leading-8 text-gray justify-center md:max-h-76 lg:w-[33rem] '>passionate about developing elegant, functional and responsive user interfaces that provide an exceptional experience for end users. When I'm not working, I like to kitesurf, watch videos and series.</p>
            <div className='flex justify-center gap-4 px-10 pt-10 md:justify-normal lg:px-0'>
              <a href={"/projetos"}><button className=' bg-dots-blue w-44 px-4 h-16 rounded-xl text-lg text-white hover:bg-black ease-in duration-150'>Check my work</button></a>
              <a href={"/contato"}><button className=' bg-black w-44 px-4 h-16 rounded-xl text-lg text-white hover:bg-dots-blue ease-in duration-150'>Contact me</button></a>
            </div>
          </div>

        </div>

      </section>

    </main>
  )
}

