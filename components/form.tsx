'use client'
import { useState } from "react";

function validateEmail(email: string): boolean {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function MyForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textarea, setTextarea] = useState('')
    
    const handleEnviar = () => {
          setName("")
          setEmail("")
          setTextarea("")
          alert("Mensagem enviada com sucesso ! ")
          
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      
      
      setEmail(value);
      if (!validateEmail(value)) {
      }

    };


    return (
        <form action="" id="form" className=' flex flex-col bg-slate-700 p-10 mx-10 justify-center align-middle max-w-2xl gap-2 md:m-auto text-white rounded-3xl'>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} placeholder='Digite seu nome' required className=' mb-6 text-black'/>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} placeholder='Digite seu email' required className=' mb-6 text-black'/>
              <span className="hidden" id="email-invalido">Por favor digite um email valido.</span>
              <label htmlFor="message">Menssagem </label>
              <textarea name="textarea" id="textarea" cols={30} rows={10} value={textarea} onChange={e => setTextarea(e.target.value)} required placeholder='digite sua menssagem aqui' className='text-black mb-6'></textarea>
              <button className=' p-2 bg-sky-600 rounded-xl'  type='button' onClick={handleEnviar}>Enviar</button>
            </form>
    );
}


export default MyForm;

  