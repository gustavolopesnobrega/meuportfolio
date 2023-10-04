'use client'
import Image from "next/image";
import Link from 'next/link';
import cim from '/public/cim.png'
import { AiOutlineEye } from 'react-icons/ai'

function CardCim() {

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
                    <p className="py-4 ">The CIM is the most representative organization of Italians residing abroad, of natives and descendants. It is present in 33 countries, coordinates and represents over 2,000 federations and associations of Italians around the world. During creation I was able to develop fundamental knowledge, including logically structuring content with HTML, effective styling using CSS, and adding interactivity with JavaScript. Additionally, I learned how to debug and troubleshoot, optimize performance, consider user experience, and apply good development practices such as accessibility and SEO. This experience also emphasized the importance of continuous learning in an ever-evolving field, providing a solid foundation for future web development projects.</p>
                    <div className="flex gap-5 lg:justify-center py-6 text-sm lg:text-md lg:mt-30 ">
                        <Link href={"https://cimconfederazione.it/"} target="_blank" className=" bg-black flex gap-2 hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3"><AiOutlineEye className="mt-1"></AiOutlineEye>View project</Link>
                        <Link href={"https://github.com/gustavolopesnobrega/CIM"} target="_blank" className=" bg-black  hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3"> Github repositorio</Link>
                    </div>
                </div>
            </div>
        </Link>



    );
}

export default CardCim;

