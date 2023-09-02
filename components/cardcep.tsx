'use client'
import Image from "next/image";
import Link from 'next/link';
import cep from '/public/buscadorcepimg.png'
import { AiOutlineEye } from 'react-icons/ai'

function CardCep() {

    return (
        <div className="bg-card-bg rounded-md flex flex-col p-6 max-w-xs md:max-w-sm lg:max-w-sm">
            <div className=" rounded-md flex  justify-center">
                <Image src={cep} alt="CIM-website" className="h-60 w-auto"></Image>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="py-4 font-medium text-lg">Zip tracker</h2>
                <div className=" flex gap-2 text-white">
                    <span className="bg-dots-blue px-4 py-1 rounded-xl ">Html</span>
                    <span className="bg-dots-blue px-4 py-1 rounded-xl">CSS</span>
                    <span className="bg-dots-blue px-4 py-1 rounded-xl">ReactJS</span>
                </div>
                <p className="py-4 h-52">Zip tracker is a web application capable of finding an address with a given zip code using the "viacep" API.
                    Through this application I was able to develop some important concepts for web development such as working with React and some of its libraries in addition to the consumption of REST API</p>
                <div className="flex gap-5 lg:justify-center py-6 text-sm lg:text-md ">
                    <Link href={"https://buscador-de-cep-ten-iota.vercel.app/"} target="_blank" className=" bg-black gap-2 flex hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3"><AiOutlineEye className="mt-1"></AiOutlineEye>View project</Link>
                    <Link href={"https://github.com/gustavolopesnobrega/Buscador-de-CEP"} target="_blank" className=" bg-black hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3">Github repositorio</Link>
                </div>
            </div>
        </div>

    );
}

export default CardCep;

