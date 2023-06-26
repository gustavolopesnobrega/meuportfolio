'use client'


function MyForm() {

    return (
        <form action="" id="form" className=' flex flex-col bg-zinc-800 p-10 mx-10 justify-center align-middle max-w-2xl gap-2 md:m-auto text-white rounded-md mb-4'>
            <label htmlFor="name">Name</label>
            <input type="name" name="name" id="name" placeholder="Enter your name" required className=' mb-6 text-black rounded-sm p-1' />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className=' mb-6 text-black rounded-sm p-1' />
            <span className="hidden" id="email-invalido">Por favor digite um email valido.</span>
            <label htmlFor="message">Message </label>
            <textarea name="textarea" id="textarea" cols={30} rows={10} placeholder="Text me" required className='text-black mb-6  rounded-sm p-1'></textarea>
            <button className=' p-2 bg-white hover:bg-dots-blue text-black hover:text-white rounded-md ease-in duration-150' type='button'>Enviar</button>
        </form>
    );
}

export default MyForm;

