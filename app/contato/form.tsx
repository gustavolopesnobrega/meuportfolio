'use client'
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { object, z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'


const schema = z.object({
    schemaName: z.string().min(3, 'Name must contain at least 3 characters'),
    schemaEmail: z.string().email(),
    SchemaMessage: z.string().min(5, 'Message must contain at least 5 characters')
});



// extract the inferred type like this
type FormProps = z.infer<typeof schema>;


function MyForm() {
    const [isBotaoAtivado, setIsBotaoAtivado] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register, formState: { errors } } = useForm<FormProps>({
        mode: 'all',
        resolver: zodResolver(schema)
    });


    async function handleSubmit(event: any) {
        event.preventDefault();

        let name = event.target.name.value
        let email = event.target.email.value
        let message = event.target.textarea.value

        function handleEmailSent() {
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-dots-blue shadow-lg rounded-lg pointer-events-auto flex justify-center ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex justify-center p-4">
                        <div className="flex items-center">
                            <div className="flex-auto ">
                                <div className='flex justify-center'>
                                    <p className="text-sm font-medium text-white">
                                        {name}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-white">
                                    Your message was sent successfully !
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            ))
        }

        function handleEmailNotSent() {
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-dots-blue shadow-lg rounded-lg pointer-events-auto flex justify-center ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex justify-center p-4">
                        <div className="flex items-center">
                            <div className="flex-auto ">
                                <div className='flex justify-center'>
                                    <p className="text-sm font-medium text-white">

                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-white">
                                    Something wrong, check the fields and try again !
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            ))
        }


        const sendContactMail = async (
            name: String,
            senderMail: String,
            content: String
        ) => {
            const data = {
                name,
                senderMail,
                content
            };

            try {
                await axios.post('/api/contact', data);
                handleEmailSent();
                return;
            } catch (error) {
                console.log(error)
                handleEmailNotSent()

            }

        }
        try {
            setLoading(true);
            await sendContactMail(name, email, message);
            event.target.name.value = '';
            event.target.email.value = '';
            event.target.textarea.value = '';
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }
    return (
        <form onSubmit={handleSubmit} id="form" className='flex flex-col bg-zinc-800 p-10 mx-10 justify-center align-middle max-w-2xl gap-2 md:m-auto text-white rounded-md mb-4'>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className='text-black rounded-sm p-1'
                {...register('schemaName')}
            />
            {errors.schemaName?.message && (<p className='text-slate-300 font-light'>{errors.schemaName.message}</p>)}

            <label htmlFor="email">Email</label>
            <input
                type="email"

                id="email"
                placeholder="Enter your email"
                className='text-black rounded-sm p-1'
                {...register('schemaEmail')}
            />
            {errors.schemaEmail?.message && (<p className='text-slate-300 font-light'>{errors.schemaEmail.message}</p>)}

            <label htmlFor="message">Message</label>
            <textarea
                id="textarea"
                cols={30}
                rows={10}
                placeholder="Text me"
                className='text-black rounded-sm p-1'
                {...register('SchemaMessage')}

            ></textarea>
            {errors.SchemaMessage?.message && (<p className='text-slate-300 font-light'>{errors.SchemaMessage.message}</p>)}

            <button type="submit" className={`p-2 mt-8 rounded-md ease-in duration-150 ${loading || isBotaoAtivado ? 'bg-gray-500 text-gray-300' : 'bg-white hover:bg-dots-blue text-black hover:text-white'}`} disabled={loading || isBotaoAtivado}>Send</button>
        </form>
    );
}

export default MyForm;
