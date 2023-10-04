
'use client'
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import gnlogo from '@/public/logoglobogn.png'
import Image from 'next/image';
import Link from 'next/link';
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp, AiFillHtml5 } from 'react-icons/ai'
import Languages from '@/components/languages';
import NavBarPt from '@/components/navbarpt';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiSpringboot } from 'react-icons/si';
import { DiJava, DiCss3 } from 'react-icons/di';


export default function Resume() {

    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!isOpen);
    };
    return (
        <main className="  text-black pb-2 max-h-view ">
            <section className="bg-white min-h-screen overflow-x-hidden relative">
                <NavBarPt></NavBarPt>

                <div className=" text-center lg:max-w-7xl justify-center m-auto lg:text-lg bg-gradient-to-b from-slate-50 to-gray-200 rounded-3xl ">
                    <div className="flex flex-col gap-8 p-10 justify-items-center justify-center">

                        <div className=" flex justify-center ">
                            <h1 className="flex text-4xl font-semibold text-white bg-black w-fit ">Curriculo</h1>
                        </div>

                        <div className="flex justify-center align-middle">
                            <p className=" text-gray-800 ">Iniciei minha jornada como desenvolvedor em fevereiro de 2022 no curso de Sistemas para Internet da Faculdade UNIESP em João Pessoa. Durante este período, venho desenvolvendo minhas habilidades em desenvolvimento Web. Atualmente, estou focado em tecnologias Front-End como <b>React</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b> e < b>Figma</b>, bem como <b>SQL</b>, <b>lógica de programação</b>, <b>OOP</b>, <b>Rest API</b>, <b>Java</b> e < b>Spring Boot</b>.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col p-10 gap-8 ">
                        <div className=" flex justify-center">
                            <h1 className="flex justify-center text-2xl font-semibold text-white bg-black w-fit">Sobre mim</h1>
                        </div>

                        <p className=" text-gray-800">Sou uma pessoa dedicada e comprometida, com paixão por aprender coisas novas e aprimorar minhas habilidades, o que me leva a buscar constantemente desafios e oportunidades de crescimento. Sou extrovertido e comunicativo, o que me permite interagir facilmente com pessoas de diferentes origens e culturas. Em 2019, embarquei em um intercâmbio linguístico de dois anos em Dublin, na Irlanda, onde tive a oportunidade de desenvolver minha proficiência na língua inglesa e habilidades interpessoais.
                        </p>
                    </div>

                    <div className="flex flex-col p-10 gap-8 ">
                        <div className=" flex justify-center">
                            <h2 className="flex justify-center text-2xl font-semibold text-white bg-black w-fit">Educação</h2>
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                Unipe - Centro Universitario de João Pessoa
                            </h3>
                            <p>
                                Sistemas para Internet (Janeiro 2022 - Junho 2024)
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Berlitz English School Dublin - Ireland
                            </h3>
                            <p>
                                Advanced English Certificate (Fev 2019 - Fev 2021)
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-col p-10 gap-8" >
                        <div className="flex justify-center">
                            <h2 className="flex justify-center text-2xl font-semibold text-white bg-black w-fit ">Experiências</h2>
                        </div>

                        <h3 className="font-semibold">CIM - Confederazione degli Italiani nel mondo</h3>
                        <span>Freelance Web Developer</span>
                        <span>Janeiro 2023 - Presente</span>
                        <span>Rome - Italy</span>
                        <p>
                            Trabalhei como desenvolvedor web com o objetivo de entregar soluções inovadoras através do desenvolvimento de aplicações web ponta a ponta. Neste processo, engajei-me na recolha de requisitos em colaboração com as partes interessadas e prossegui com as fases de implementação e implantação da aplicação. Meu foco principal era garantir a entrega de produtos de alta qualidade, buscando consistentemente a excelência técnica e a satisfação dos usuários.
                        </p>
                    </div>


                    <div className="flex justify-center">
                        <h2 className="flex justify-center text-2xl font-semibold  text-white bg-black w-fit">Habilidades e Ferramentas</h2>
                    </div>

                    <div className=" flex p-10  font-semibold text-center justify-evenly">
                        <div className="flex flex-col">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>TailwindCSS</span>
                        </div>
                        <div className="flex flex-col">
                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>Git</span>
                            <span>Github</span>
                        </div>
                    </div>
                    <div className='flex justify-center flex-wrap px-4 text-slate-800 text-3xl lg:text-4xl gap-4'>
                        <AiFillHtml5 className='hover:text-dots-blue hover:scale-150 hover:ease-in duration-150'></AiFillHtml5>
                        <DiCss3 className='hover:text-dots-blue hover:scale-150 hover:ease-in duration-150'></DiCss3>
                        <SiJavascript className='hover:text-dots-blue hover:scale-150 hover:ease-in duration-150'></SiJavascript>
                        <FaReact className='hover:text-dots-blue hover:scale-150 hover:ease-in duration-150'></FaReact>
                        <SiTailwindcss className='hover:text-dots-blue hover:scale-150 hover:ease-in duration-150'></SiTailwindcss>
                        <SiNextdotjs className='hover:text-dots-blue hover:scale-150 hover:ease-in duration-150'></SiNextdotjs>
                        <DiJava className='hover:text-dots-blue hover:scale-150 hover:ease-in duration-150'></DiJava>
                        <SiSpringboot className='hover:text-dots-blue hover:scale-150 hover:ease-in duration-150'></SiSpringboot>
                        <FaGitAlt className='hover:text-dots-blue hover:scale-150 hover:ease-in duration-150'></FaGitAlt>
                        <AiFillGithub className='hover:text-dots-blue hover:scale-150 hover:ease-in duration-150'></AiFillGithub>



                    </div>
                    <div className=" pb-20">
                        <h2 className="py-10 font-bold text-slate-800">Baixe meu curriculo como arquivo PDF.</h2>
                        <div>
                            <a className="bg-black p-4 rounded-md text-white hover:bg-dots-blue ease-in duration-150" target='_blank' href="https://docs.google.com/document/d/1wVHgAbNV7hh1gM859qCpqQUtUDABDoGsMnvlHwnGlBc/edit?usp=sharing">Baixar</a>
                        </div>

                    </div>



                </div>

            </section>

        </main>
    )
}

