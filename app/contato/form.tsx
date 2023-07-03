'use client'
import axios from 'axios';

function MyForm() {

    async function handleSubmit(event: any) {
        event.preventDefault();

        let name = event.target.name.value
        let email = event.target.email.value
        let message = event.target.textarea.value

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
                return await axios.post('/api/contact', data);

            } catch (error) {
                console.log(error)
            }

        }
        try {
            await sendContactMail(name, email, message)
            event.target.name.value = '';
            event.target.email.value = '';
            event.target.textarea.value = '';
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <form onSubmit={handleSubmit} id="form" className='flex flex-col bg-zinc-800 p-10 mx-10 justify-center align-middle max-w-2xl gap-2 md:m-auto text-white rounded-md mb-4'>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className='mb-6 text-black rounded-sm p-1'
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"

                id="email"
                placeholder="Enter your email"
                className='mb-6 text-black rounded-sm p-1'
            />
            <span className="hidden" id="email-invalido">Please enter a valid email.</span>
            <label htmlFor="message">Message</label>
            <textarea
                id="textarea"
                cols={30}
                rows={10}
                placeholder="Text me"
                className='text-black mb-6 rounded-sm p-1'

            ></textarea>


            <button type="submit" className='p-2 bg-white hover:bg-dots-blue text-black hover:text-white rounded-md ease-in duration-150'>Send</button>
        </form>
    );
}

export default MyForm;
