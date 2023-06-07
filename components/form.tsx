'use client'


function MyForm(){

    return (
        <form action="" id="form" className=' flex flex-col bg-slate-700 p-10 mx-10 justify-center align-middle max-w-2xl gap-2 md:m-auto text-white rounded-3xl mb-4'>
              <label htmlFor="name">Nome</label>
              <input type="name" name="name" id="name" placeholder='Digite seu nome' required className=' mb-6 text-black'/>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Digite seu email' required className=' mb-6 text-black'/>
              <span className="hidden" id="email-invalido">Por favor digite um email valido.</span>
              <label htmlFor="message">Menssagem </label>
              <textarea name="textarea" id="textarea" cols={30} rows={10}  required placeholder='digite sua menssagem aqui' className='text-black mb-6'></textarea>
              <button className=' p-2 bg-sky-600 rounded-xl'  type='button'>Enviar</button>
            </form>
    );
}

export default MyForm;

  