'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineArrowUp } from 'react-icons/ai'; // Certifique-se de importar o ícone do Heroicons
import Link from 'next/link';


function ScrollToTopButton() {
    return (
        <Link href={"#bodyId"}
            className={`fixed scroll-smooth bottom-4 right-4 p-2 rounded-full bg-black text-white hover:bg-dots-blue transition-opacity duration-500'
                }`}

            aria-label="Scroll to top"
        >

            <AiOutlineArrowUp className="h-6 w-6" />
        </Link>
    );
};

export default ScrollToTopButton;