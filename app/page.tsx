'use client'
import { Inter } from 'next/font/google';
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'

import { Poppins } from 'next/font/google';
import Image from 'next/image';
import perfil from '../public/gnblackwhitewitheffect.png';
import NavBar from '@/components/navbar';
import CardCim from '@/components/cardcim';
import CardCep from '@/components/cardcep';
import CardBugTracker from '@/components/bugtracker';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { object, z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import Portfolio from '@/components/portfolio';
import { motion } from 'framer-motion';
import SocialContactBar from '@/components/socialContactBar';
import FooterBar from '@/components/footer/footer'




const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const schema = z.object({
    schemaName: z.string().min(3, 'Name must contain at least 3 characters'),
    schemaEmail: z.string().email(),
    SchemaMessage: z.string().min(5, 'Message must contain at least 5 characters')
  });



  // extract the inferred type like this
  type FormProps = z.infer<typeof schema>;


  const [isBotaoAtivado, setIsBotaoAtivado] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, formState: { errors } } = useForm<FormProps>({
    mode: 'all',
    resolver: zodResolver(schema)
  });


  async function handleSubmit(event: any) {
    event.preventDefault();

    let name = event.target.name.value
    let email = event.target.email.value
    let message = event.target.textarea.value

    function handleEmailSent() {
      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-dots-blue shadow-lg rounded-lg pointer-events-auto flex justify-center ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex justify-center p-4">
            <div className="flex items-center">
              <div className="flex-auto ">
                <div className='flex justify-center'>
                  <p className="text-sm font-medium text-white">
                    {name}
                  </p>
                </div>
                <p className="mt-1 text-sm text-white">
                  Your message was sent successfully !
                </p>
              </div>
            </div>
          </div>

        </div>
      ))
    }

    function handleEmailNotSent() {
      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-dots-blue shadow-lg rounded-lg pointer-events-auto flex justify-center ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex justify-center p-4">
            <div className="flex items-center">
              <div className="flex-auto ">
                <div className='flex justify-center'>
                  <p className="text-sm font-medium text-white">

                  </p>
                </div>
                <p className="mt-1 text-sm text-white">
                  Something wrong, check the fields and try again !
                </p>
              </div>
            </div>
          </div>

        </div>
      ))
    }


    const sendContactMail = async (
      name: String,
      senderMail: String,
      content: String
    ) => {
      const data = {
        name,
        senderMail,
        content
      };

      try {
        await axios.post('/api/contact', data);
        handleEmailSent();
        return;
      } catch (error) {
        console.log(error)
        handleEmailNotSent()

      }

    }
    try {
      setLoading(true);
      await sendContactMail(name, email, message);
      event.target.name.value = '';
      event.target.email.value = '';
      event.target.textarea.value = '';
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

  }

  return (
    <main className=" h-full bg-white text-black pb-2 overflow-x-hidden " >
      <section className=" min-h-screen relative "  >
        <NavBar></NavBar>
        <div className='flex flex-col py-10 lg:flex-col lg:justify-center lg:px-20 lg:py-16 ' id='home'>
          <div className='flex flex-col md:flex-row  lg:m-auto'>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className=' justify-center lg:justify-start lg:flex lg:min-w-fit lg:mt-5 hover:scale-110 hover:ease-in duration-200 cursor-pointer'>
                <Link href={"https://www.linkedin.com/in/gustavo-nobrega-514845187/"} target='_blank'><Image src={perfil} alt='foto de gustavo' className='md:w-auto lg:h-[40rem] '></Image></Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .5 }}
            >
              <div className='flex flex-col gap-4 justify-center px-8 md:text-xl '>
                <h1 className=' text-4xl font-semibold max-w-sm py-2 lg:text-5xl text-black w-80'>Gustavo <br />Nobrega</h1>
                <h2 className=' text-3xl font-semibold  py-2 lg:text-5xl text-black '>Front-End <br />Web Developer</h2>

                <p className=' leading-8 max-w-sm text-gray justify-center md:max-h-76 lg:w-[33rem] '>passionate about developing functional applications and responsive user interfaces that provide an exceptional experience for end users. Currently, I'm focused on Front-End technologies such as <b>React</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, and <b>Figma</b>, as well as <b>SQL</b>, <b>programming logic</b>, <b>OOP</b>, <b>Java</b>, and <b>Spring Boot</b>.</p>

                <div className='flex justify-center gap-12 pt-10 md:justify-normal'>
                  <a href='#projetos ' className="bg-black hover:bg-dots-blue px-6 py-6 w-max rounded-xl text-gray-50" >Check my work</a>
                  <a href='#contato ' className="bg-black hover:bg-dots-blue px-6 py-6 rounded-xl text-gray-50" >Contact me</a>
                </div>

              </div>
            </motion.div>
          </div>

          <div className=' text-black-800 flex-col lg:flex gap-10 md:py-10 lg:py-28 margin-auto'>
            <h1 className='flex justify-center py-28 text-3xl ' id='projetos'>Work</h1>
            <div className=' flex flex-wrap justify-center gap-14 md:justify-center lg:justify-center'>
              <Portfolio></Portfolio>
              <CardCim></CardCim>
              <CardCep></CardCep>

              <CardBugTracker></CardBugTracker>
            </div>

          </div>
        </div>
        <div className=' px-10' >
          <h1 className=' flex justify-center text-4xl my-4 text-black'>Get in touch with me. </h1>
          <p className='flex justify-center pb-4' id='contato'>Let me know if you are interested in my services or collaboration, I will reply as soon as possible.</p>
          <SocialContactBar></SocialContactBar>

        </div>


        <div className=' bg-dots-blue'>
          <Toaster
            position="top-center"

            reverseOrder={false}
          />
        </div>

        <form onSubmit={handleSubmit} id="form" className='flex flex-col bg-zinc-800 p-10 mx-10 justify-center align-middle max-w-2xl gap-2 md:m-auto  text-white rounded-md lg:my-10 '>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className='text-black rounded-sm p-1'
            {...register('schemaName')}
          />
          {errors.schemaName?.message && (<p className='text-slate-300 font-light'>{errors.schemaName.message}</p>)}

          <label htmlFor="email">Email</label>
          <input
            type="email"

            id="email"
            placeholder="Enter your email"
            className='text-black rounded-sm p-1'
            {...register('schemaEmail')}
          />
          {errors.schemaEmail?.message && (<p className='text-slate-300 font-light'>{errors.schemaEmail.message}</p>)}

          <label htmlFor="message">Message</label>
          <textarea
            id="textarea"
            cols={30}
            rows={10}
            placeholder="Text me"
            className='text-black rounded-sm p-1'
            {...register('SchemaMessage')}

          ></textarea>
          {errors.SchemaMessage?.message && (<p className='text-slate-300 font-light'>{errors.SchemaMessage.message}</p>)}

          <button type="submit" className={`p-2 mt-8 rounded-md ease-in duration-150 ${loading || isBotaoAtivado ? 'bg-gray-500 text-gray-300' : 'bg-white hover:bg-dots-blue text-black hover:text-white'}`} disabled={loading || isBotaoAtivado}>Send</button>
        </form>

      </section>

    </main >
  )
}

