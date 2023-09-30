import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'



function SocialContactBar() {
    return (
        <div className='  py-4 gap-10 text-gray md:text-xl md:justify-center md:mx-0 md:mt-0 lg:mx-0 lg:flex lg:pt-3'>
            <ul className=' flex justify-center text-3xl gap-10 align-middle '>
                <a href="https://www.linkedin.com/in/gustavo-nobrega-514845187/" target='_blank'><AiFillLinkedin className=' ml-1 hover:text-dots-blue hover:scale-125 hover:ease-in duration-200' /></a>
                <a href="https://github.com/gustavolopesnobrega" target='_blank'><AiFillGithub className=' ml-1 hover:text-dots-blue hover:scale-125 hover:ease-in duration-200' /></a>
                <a href="https://api.whatsapp.com/send?phone=5583998601573" target='_blank'><AiOutlineWhatsApp className=' ml-2 hover:text-dots-blue hover:scale-125 hover:ease-in duration-200' /></a>

            </ul>

        </div>
    );
};

export default SocialContactBar;