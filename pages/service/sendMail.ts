import axios from 'axios';

export const sendContactMail = async (
    name: String,
    senderMail: String,
    content: String
) => {
    const data = {
        name,
        senderMail,
        content
    };

    try{
        return await axios.post('/api/contact', data);
    }catch(error){
        return error;
    }

};