'use client'
import Image from "next/image";
import Link from 'next/link';
import cep from '/public/buscadorcepimg.png'
import { AiOutlineEye } from 'react-icons/ai'

function CardCepPt() {

    return (
        <Link href={"https://buscador-de-cep-ten-iota.vercel.app/"} target="_blank">
            <div className="bg-card-bg hover:bg-slate-200 rounded-md flex flex-col p-6 max-w-md md:max-w-sm lg:max-w-sm hover:scale-110 hover:ease-in duration-300">
                <div className=" rounded-md flex  justify-center">
                    <Image src={cep} alt="CIM-website" className="h-60 w-auto"></Image>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="py-4 font-medium text-lg">Localizador de CEP Web APP</h2>
                    <div className=" flex gap-2 text-white">
                        <span className="bg-dots-blue px-4 py-1 rounded-xl ">Html</span>
                        <span className="bg-dots-blue px-4 py-1 rounded-xl">CSS</span>
                        <span className="bg-dots-blue px-4 py-1 rounded-xl">ReactJS</span>
                    </div>
                    <p className="py-4 h-52">Zip tracker é uma aplicação web capaz de encontrar um endereço com um determinado CEP usando a API "viacep".
                        Através desta aplicação pude desenvolver alguns conceitos importantes para desenvolvimento web como trabalhar com React e algumas de suas bibliotecas além do consumo de API REST</p>
                    <div className="flex mt-26 gap-5 lg:justify-center py-6 text-sm lg:text-md lg:mt-[8.6rem] ">
                        <Link href={"https://buscador-de-cep-ten-iota.vercel.app/"} target="_blank" className=" bg-black gap-2 flex hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3"><AiOutlineEye className="mt-1"></AiOutlineEye>View project</Link>
                        <Link href={"https://github.com/gustavolopesnobrega/Buscador-de-CEP"} target="_blank" className=" bg-black hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3">Github repositorio</Link>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardCepPt;

