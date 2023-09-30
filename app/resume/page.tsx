
'use client'
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import gnlogo from '@/public/logoglobogn.png'
import Image from 'next/image';
import Link from 'next/link';
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import Languages from '@/components/languages';


export default function Resume() {

    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!isOpen);
    };
    return (
        <main className="  text-black pb-2 max-h-view ">
            <section className="bg-white min-h-screen overflow-x-hidden relative">
                <div className='  text-black flex-col bg-white overflow-x-hidden '>
                    <nav className=" flex justify-between  gap-10 md:py-6 md:flex md:justify-center lg:justify-between lg:px-10 ">
                        <div className=' w-48 flex pt-4 md:pt-0 lg:pt-0 gap-2 '>
                            <Link href={'/'}><Image src={gnlogo} alt='logo' className='h-12 w-32'></Image></Link>
                            <Languages></Languages>
                        </div>
                        <div className={` absolute right-0 top-0 text-black flex justify-between bg-white w-full h-full transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                            <ul className=' flex flex-col py-28 px-64 gap-10 text-xl max-h-screen '>
                                <Link href={"/"} className=' border-b-2 divide-slate-900 ' id="work" >work</Link>
                                <Link href={"/"} className=' border-b-2 divide-slate-200'>contact</Link>
                                <Link href={"/resume"} className=' border-b-2 divide-slate-200'>resume</Link>
                            </ul>
                        </div>
                        <ul className=' hidden md:flex mx-4 gap-2 md:px-24 lg:px-48 md:gap-16 font-medium py-2 lg:text-lg '>
                            <li className='md:hover:text-dots-blue '>
                                <a href={"/#projetos"}>work</a>
                            </li>

                            <li className='md:hover:text-dots-blue'>
                                <a href={"/#contato"} >contact</a>
                            </li>

                            <li className=' text-black md:hover:text-dots-blue'>
                                <a href={"/resume"} >resume</a>
                            </li>


                        </ul>
                        <div className=' text-3xl py-0 gap-10 text-gray md:text-xl md:justify-normal md:mx-0 md:mt-0 lg:mx-0 hidden lg:flex lg:pt-3'>
                            <ul className=' flex justify-center gap-10 align-middle '>
                                <a href="https://www.linkedin.com/in/gustavo-nobrega-514845187/" target='_blank'><AiFillLinkedin className=' ml-1 hover:text-dots-blue' /></a>
                                <a href="https://github.com/gustavolopesnobrega" target='_blank'><AiFillGithub className=' ml-1 hover:text-dots-blue' /></a>
                                <a href="https://api.whatsapp.com/send?phone=5583998601573" target='_blank'><AiOutlineWhatsApp className=' ml-2 hover:text-dots-blue' /></a>

                            </ul>

                        </div>
                        <div className=' md:hidden mt-2 mr-4'>
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                    </nav>

                </div>
                <div className=" text-center lg:max-w-7xl justify-center m-auto lg:text-lg bg-gradient-to-b from-slate-50 to-gray-200 rounded-3xl ">
                    <div className="flex flex-col gap-8 p-10 justify-items-center justify-center">

                        <div className=" flex justify-center ">
                            <h1 className="flex text-4xl font-semibold text-white bg-black w-fit ">Resume</h1>
                        </div>

                        <div className="flex justify-center align-middle">
                            <p className=" text-gray-800 ">I started my journey as a developer in February 2022 on the Internet Systems course at Faculdade UNIESP in João Pessoa. During this period, I have been developing my skills in Web development. Currently, I am focused on Front-End technologies such as <b>React</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b> and < b>Figma </b>, as well as <b>SQL</b>, <b>programming logic</b>, <b>OOP</b>, <b >Java</b> and < b>Spring Boot</b>.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col p-10 gap-8 ">
                        <div className=" flex justify-center">
                            <h1 className="flex justify-center text-2xl font-semibold text-white bg-black w-fit">About me</h1>
                        </div>

                        <p className=" text-gray-800">I am a dedicated and committed individual with a passion for learning new things and enhancing my skills, which drives me to constantly seek challenges and growth opportunities. I am outgoing and communicative, allowing me to easily interact with people from different backgrounds and cultures. In 2019, I embarked on a two-year language exchange in Dublin, Ireland, where I had the opportunity to develop my English language proficiency and interpersonal skills.
                        </p>
                    </div>

                    <div className="flex flex-col p-10 gap-8 ">
                        <div className=" flex justify-center">
                            <h2 className="flex justify-center text-2xl font-semibold text-white bg-black w-fit">Education</h2>
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                UNIESP Centro Universitário
                            </h3>
                            <p>
                                Studying Systems for Internet · (January 2022 - June 2024)
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Berlitz English School Dublin - Ireland
                            </h3>
                            <p>
                                Advanced English Certificate. (Feb 2019 - Feb 2021)
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-col p-10 gap-8" >
                        <div className="flex justify-center">
                            <h2 className="flex justify-center text-2xl font-semibold text-white bg-black w-fit ">Work experience</h2>
                        </div>

                        <h3 className="font-semibold">CIM - Confederazione degli Italiani nel mondo</h3>
                        <span>Freelance Web Developer</span>
                        <span>January 2023 - Present</span>
                        <span>Rome - Italy</span>
                        <p>
                            I worked as a web developer with the goal of delivering innovative solutions through end-to-end web application development. Throughout this process, I engaged in requirements gathering in collaboration with stakeholders and proceeded with the implementation and deployment phases of the application. My main focus was to ensure the delivery of high-quality products, consistently pursuing technical excellence and user satisfaction.
                        </p>
                    </div>


                    <div className="flex justify-center">
                        <h2 className="flex justify-center text-2xl font-semibold  text-white bg-black w-fit">Skill and Tools</h2>
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
                            <span>Rest API</span>
                            <span>Git</span>
                            <span>Github</span>
                        </div>
                    </div>
                    <div className=" pb-20">
                        <h2 className="py-10 font-bold text-slate-800">Download my cv as PDF file.</h2>
                        <div>
                            <a className="bg-black p-4 rounded-md text-white hover:bg-dots-blue ease-in duration-150" target='_blank' href="https://docs.google.com/document/d/1-Ke0Uc2sv0B6KAu9lN0Xq_sW7kuLdYY0/edit?usp=drive_link&ouid=101309927430688215088&rtpof=true&sd=true">Download</a>
                        </div>

                    </div>



                </div>

            </section>

        </main>
    )
}

