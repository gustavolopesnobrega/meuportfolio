import { Inter } from 'next/font/google'

import {AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'


const inter = Inter({ subsets: ['latin'] })

export default function Projetos() {
  return (
    <main className="  text-black pb-2 ">
     <section className=" w-full h-fit bg-cover bg-hero-pattern min-h-screen">
     <div className=' text-gray-400 flex-col bg-zinc-900'>
          <nav className="py-6 px-4 flex justify-around align-middle">
            <ul className=' flex justify-between mx-4 gap-2 md:px-24 lg:px-48 md:gap-16'>
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
        
            <h1 className=' flex justify-center py-6 text-4xl my-4 text-black'>Deixe sua mensagem !</h1>
            <div className=' text-3xl py-2 gap-10 text-gray md:text-4xl md:justify-normal md:mx-20 md:mt-10 lg:mx-40'>
                <ul className=' flex justify-center gap-10 align-middle'>
                  <a href="https://www.linkedin.com/in/gustavo-nobrega-514845187/" target='_blank'><AiFillLinkedin className=' ml-1'/><p className=' text-sm py-2'>Linkedin</p></a>
                  <a href="https://github.com/gustavolopesnobrega" target='_blank'><AiFillGithub className=' ml-1'/><p className=' text-sm py-2'>Github</p></a>
                  <a href="https://api.whatsapp.com/send?phone=5583986377342" target='_blank'><AiOutlineWhatsApp className=' ml-2'/><p className=' text-sm text-gray-700 py-2'>WhatsApp</p></a>
              
                </ul>
                
            </div>
            <form action="" className=' flex flex-col bg-slate-700 p-10 mx-10 justify-center align-middle max-w-2xl gap-2 md:m-auto text-white rounded-3xl'>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" placeholder='Digite seu nome' required className=' mb-6 text-black'/>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Digite seu email' required className=' mb-6 text-black'/>
              <label htmlFor="message">Menssagem</label>
              <textarea name="textarea" id="textarea" cols={30} rows={10} required placeholder='digite sua menssagem aqui' className='text-black mb-6'></textarea>
              <button className=' p-2 bg-sky-600 rounded-xl' type='submit'>Enviar</button>
            </form>
     </section>
     
    </main>
  )
}