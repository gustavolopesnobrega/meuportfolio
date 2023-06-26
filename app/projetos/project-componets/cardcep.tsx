'use client'
import Image from "next/image";
import Link from 'next/link';
import cep from '/public/buscadorcepimg.png'

function CardCep() {

    return (
        <div className=" flex flex-col p-6 max-w-xs md:max-w-sm lg:max-w-sm">
            <div className=" bg-zinc-200 p-4 rounded-md flex  justify-center">
                <Image src={cep} alt="CIM-website" className="h-60 w-auto"></Image>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="py-4 font-medium text-lg">Confederazione degli Italiani nel Mondo</h2>
                <div className=" flex gap-2 text-white">
                    <span className="bg-dots-blue px-4 py-1 rounded-xl ">Html</span>
                    <span className="bg-dots-blue px-4 py-1 rounded-xl">CSS</span>
                    <span className="bg-dots-blue px-4 py-1 rounded-xl">JavaScript</span>
                </div>
                <p className="py-4">Zip tracker is a web application capable of finding an address with a given zip code using the viacep API.</p>
                <div className="flex gap-2 ">
                    <Link href={"https://cimconfederazione.it/"} target="_blank" className=" bg-black hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3">View project</Link>
                    <Link href={"https://github.com/gustavolopesnobrega/Buscador-de-CEP"} target="_blank" className=" bg-black hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3">Github repositorio</Link>
                </div>
            </div>
        </div>

    );
}

export default CardCep;

