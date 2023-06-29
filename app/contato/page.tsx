
import { Inter } from 'next/font/google'
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import NavBar from '@/components/navbar'
import MyForm from '@/app/contato/form'

const inter = Inter({ subsets: ['latin'] })



export default function Contato() {
  return (
    <main className="  text-black pb-2 max-h-view ">
      <section className="bg-white min-h-screen overflow-x-hidden relative">
        <NavBar></NavBar>
        <h1 className=' flex justify-center text-4xl my-4 text-black'>Get in touch with me. </h1>
        <p className='flex justify-center pb-14'>Let me know if you are interested in my services or collaboration, I will reply as soon as possible.</p>
        <MyForm></MyForm>
        {/* <div className=' text-3xl py-2 gap-10 text-gray md:text-4xl md:justify-normal md:mx-20 md:mt-10 lg:mx-40'>
          <ul className=' flex justify-center gap-10 align-middle'>
            <a href="https://www.linkedin.com/in/gustavo-nobrega-514845187/" target='_blank'><AiFillLinkedin className=' ml-1' /><p className=' text-sm py-2'>Linkedin</p></a>
            <a href="https://github.com/gustavolopesnobrega" target='_blank'><AiFillGithub className=' ml-1' /><p className=' text-sm py-2'>Github</p></a>
            <a href="https://api.whatsapp.com/send?phone=5583998601573" target='_blank'><AiOutlineWhatsApp className=' ml-2' /><p className=' text-sm text-gray-700 py-2'>WhatsApp</p></a>

          </ul>

        </div> */}
      </section>

    </main>
  )
}