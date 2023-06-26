'use client'
import Image from "next/image";
import Link from 'next/link';
import Bugtracker from '/public/bugtracker.jpg'

function CardBugTracker() {

    return (
        <div className=" flex flex-col p-6 max-w-xs md:max-w-sm lg:max-w-sm">
            <div className=" bg-zinc-200 p-4 rounded-md flex  justify-center">
                <Image src={Bugtracker} alt="CIM-website" className=" h-60 w-auto"></Image>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="py-4 font-medium text-lg">Bug Tracker Web APP</h2>
                <div className=" flex gap-2 text-white">
                    <span className="bg-dots-blue px-4 py-1 rounded-xl ">Html</span>
                    <span className="bg-dots-blue px-4 py-1 rounded-xl">CSS</span>

                </div>
                <p className="py-4">This is a copy of a bugtracker app design </p>
                <div className="flex gap-2 ">
                    <Link href={"https://cimconfederazione.it/"} target="_blank" className=" bg-black hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3">View project</Link>
                    <Link href={"https://github.com/gustavolopesnobrega/CIM"} target="_blank" className=" bg-black hover:bg-dots-blue ease-in duration-150 p-1 rounded-md text-white md:p-3">Github repositorio</Link>
                </div>
            </div>
        </div>

    );
}

export default CardBugTracker;

