'use client'
import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'; // Certifique-se de importar o ícone do Heroicons
import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`${isVisible ? 'block' : 'hidden'} bottom-5 right-5 fixed z-[9999] rounded-full bg-dots-blue text-white hover:bg-indigo-700 hover:scale-110 hover:ease-in duration-1000 p-2 `}

        ><AiOutlineArrowUp  ></AiOutlineArrowUp>
        </button>
    );
}
