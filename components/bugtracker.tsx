'use client'
import Image from "next/image";
import Link from 'next/link';
import Bugtracker from '/public/bugtracker.jpg'
import { AiOutlineEye } from 'react-icons/ai'

function CardBugTracker() {

    return (
        <Link href={'https://github.com/gustavolopesnobrega/BugTracker'} target="_blank">
            <div className=" bg-card-bg hover:bg-slate-200 rounded-md flex flex-col p-6 max-w-md md:max-w-sm lg:max-w-sm hover:scale-110 hover:ease-in duration-300">
                <div className="rounded-md flex  justify-center">
                    <Image src={Bugtracker} alt="CIM-website" className=" lg:h-60 lg:w-auto"></Image>
                </div>
                <div className="flex flex-col gap-2 lg:justify-items-center">
                    <h2 className="py-4 font-medium text-lg">Bug Tracker Web APP</h2>
                    <div className=" flex gap-2 text-white">
                        <span className="bg-dots-blue px-4 py-1 rounded-xl ">Html</span>
                        <span className="bg-dots-blue px-4 py-1 rounded-xl">CSS</span>

                    </div>
                    <p className="py-4 h-52">This is a copy of a bugtracker app design. During development I was able to learn and apply some concepts such as flexbox and semantic html </p>
                    <div className="flex gap-5 lg:justify-center py-6 text-sm lg:text-md ">
                        <Link href={"https://github.com/gustavolopesnobrega/BugTracker"} target="_blank" className=" bg-black gap-2 flex hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3" ><AiOutlineEye className="mt-1"></AiOutlineEye>View project</Link>
                        <Link href={"https://github.com/gustavolopesnobrega/BugTracker"} target="_blank" className=" bg-black hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3">Github repositorio</Link>
                    </div>
                </div>
            </div>
        </Link>

    );
}

export default CardBugTracker;

