'use client'
import Image from "next/image";
import Link from 'next/link';
import Bugtracker from '/public/bugtracker.jpg'
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'


function FooterBar() {

    return (
        <div className="flex flex-col gap-6 lg:justify-between py-8 px-10 lg:flex-row lg:px-36 lg:py-12">
            <div className="text-xs">
                <span>Copyright © 2023 developed by Gustavo Nobrega | All rights reserved.</span>
            </div>
            <div className=''>
                <ul className=' flex justify-center gap-10 align-middle text-white lg:text-xl '>
                    <a href="https://www.linkedin.com/in/gustavo-nobrega-514845187/" target='_blank'><AiFillLinkedin className=' ml-1 hover:text-dots-blue' /></a>
                    <a href="https://github.com/gustavolopesnobrega" target='_blank'><AiFillGithub className=' ml-1 hover:text-dots-blue' /></a>
                    <a href="https://api.whatsapp.com/send?phone=5583998601573" target='_blank'><AiOutlineWhatsApp className=' ml-2 hover:text-dots-blue' /></a>

                </ul>

            </div>

        </div>

    );
}

export default FooterBar;

