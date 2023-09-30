'use client'
import Image from "next/image";
import Link from 'next/link';
import cep from '/public/buscadorcepimg.png'
import { AiOutlineEye } from 'react-icons/ai'
import US from 'country-flag-icons/react/3x2/US'
import BR from 'country-flag-icons/react/3x2/BR'

function Languages() {

    return (
        <div className='flex gap-2 pt-4'>
            <Link href={'/home-pt'}><BR title="Português" className="w-5 h-5" /></Link>
            <Link href={'/'}><US title="English" className="w-5 h-5" /></Link>

        </div>

    );
}

export default Languages;

