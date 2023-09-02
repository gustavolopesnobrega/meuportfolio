
import { Inter } from 'next/font/google'
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import NavBar from '@/components/navbar'
import MyForm from '@/app/contato/form'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function Contato() {
  return (
    <main className="  text-black pb-2 max-h-view ">
      <section className="bg-white min-h-screen overflow-x-hidden relative">
        <NavBar></NavBar>
        <div className=' px-10'>
          <h1 className=' flex justify-center text-4xl my-4 text-black'>Get in touch with me. </h1>
          <p className='flex justify-center pb-14'>Let me know if you are interested in my services or collaboration, I will reply as soon as possible.</p>
        </div>
        <div className=' text-3xl py-0 gap-10 text-gray md:text-xl md:justify-normal md:mx-0 md:mt-0 lg:mx-0 hidden lg:flex lg:pt-3'>
          <ul className=' flex justify-center gap-10 align-middle '>
            <a href="https://www.linkedin.com/in/gustavo-nobrega-514845187/" target='_blank'><AiFillLinkedin className=' ml-1 hover:text-dots-blue' /></a>
            <a href="https://github.com/gustavolopesnobrega" target='_blank'><AiFillGithub className=' ml-1 hover:text-dots-blue' /></a>
            <a href="https://api.whatsapp.com/send?phone=5583998601573" target='_blank'><AiOutlineWhatsApp className=' ml-2 hover:text-dots-blue' /></a>

          </ul>

        </div>

        <MyForm></MyForm>
        <div className=' bg-dots-blue'>
          <Toaster
            position="top-center"

            reverseOrder={false}
          />
        </div>

      </section>

    </main>
  )
}