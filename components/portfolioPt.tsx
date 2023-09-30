'use client'
import Image from "next/image";
import Link from 'next/link';
import devgustavonobrega from '../public/portfolio screenshot.png'
import { AiOutlineEye } from 'react-icons/ai'

function Portfolio() {

    return (
        <div className=" bg-card-bg rounded-md flex flex-col p-6 max-w-md md:max-w-sm lg:max-w-sm hover:scale-110 hover:ease-in duration-300">
            <div className="rounded-md flex  justify-center">
                <Image src={devgustavonobrega} alt="CIM-website" className=" lg:h-60 "></Image>
            </div>
            <div className="flex flex-col gap-2 lg:justify-items-center">
                <h2 className="py-4 font-medium text-lg">devgustavonobrega Web APP</h2>
                <div className=" flex gap-2 text-white ">
                    <span className="bg-dots-blue px-4 py-1 rounded-xl">ReactJs</span>
                    <span className="bg-dots-blue px-4 py-1 rounded-xl">TailwindCSS</span>
                    <span className="bg-dots-blue px-4 py-1 rounded-xl ">NextJS</span>

                </div>
                <div className="">
                    <p className="py-4 h-56" >Este portfólio mostra minha experiência e proficiência no uso do React e suas bibliotecas associadas para criar um aplicativo interativo e rico em recursos. Dentre as tecnologias utilizadas, integrei com sucesso o Nodemailer, possibilitando a perfeita transmissão de mensagens diretamente para o meu email. Além disso, aproveitei o poder do OAuth para facilitar a autorização segura por meio da API do Gmail junto com a biblioteca Zod para validação de formulários.</p>
                </div>
                <div className=" pt-36 flex gap-5 lg:justify-center py-6 text-sm lg:text-md ">
                    <Link href={"https://www.devgustavonobrega.tech/"} target="_blank" className=" bg-black gap-2 flex hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3" ><AiOutlineEye className="mt-1"></AiOutlineEye>View project</Link>
                    <Link href={"https://github.com/gustavolopesnobrega/meuportfolio"} target="_blank" className=" bg-black hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3">Github repositorio</Link>
                </div>
            </div>
        </div>

    );
}

export default Portfolio;

