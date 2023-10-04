'use client'
import Image from "next/image";
import Link from 'next/link';
import cim from '/public/cim.png'
import { AiOutlineEye } from 'react-icons/ai'

function CardCimPt() {

    return (
        <Link href={"https://cimconfederazione.it/"} target="_blank">
            <div className=" bg-card-bg hover:bg-slate-200 rounded-md flex flex-col p-6 max-w-md md:max-w-sm lg:max-w-sm hover:scale-110 hover:ease-in duration-300 ">
                <div className="rounded-md flex  justify-center">
                    <Image src={cim} alt="CIM-website" className=""></Image>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="py-4 font-medium text-lg">cimconfederazione Web Page</h2>
                    <div className=" flex gap-2 text-white">
                        <span className="bg-dots-blue px-4 py-1 rounded-xl ">Html</span>
                        <span className="bg-dots-blue px-4 py-1 rounded-xl">CSS</span>
                        <span className="bg-dots-blue px-4 py-1 rounded-xl">JavaScript</span>
                    </div>
                    <p className="py-4 ">A CIM é a organização mais representativa dos italianos residentes no exterior, dos nativos e dos descendentes. Está presente em 33 países, coordena e representa mais de 2.000 federações e associações de italianos em todo o mundo. Durante a criação pude dquiri conhecimentos fundamentais, incluindo a estruturação lógica do conteúdo com HTML, a estilização eficaz usando CSS, e a adição de interatividade com JavaScript. Além disso, aprendi a depurar e solucionar problemas, otimizar o desempenho, considerar a experiência do usuário e aplicar boas práticas de desenvolvimento, como acessibilidade e SEO. Essa experiência também enfatizou a importância da aprendizagem contínua em um campo em constante evolução, proporcionando uma base sólida para futuros projetos de desenvolvimento web.</p>
                    <div className="flex gap-5 lg:justify-center py-6 text-sm lg:text-md lg:mt-30 ">
                        <Link href={"https://cimconfederazione.it/"} target="_blank" className=" bg-black flex gap-2 hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3"><AiOutlineEye className="mt-1"></AiOutlineEye>View project</Link>
                        <Link href={"https://github.com/gustavolopesnobrega/CIM"} target="_blank" className=" bg-black  hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3"> Github repositorio</Link>
                    </div>
                </div>
            </div>
        </Link>

    );
}

export default CardCimPt;

