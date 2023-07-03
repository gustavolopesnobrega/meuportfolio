
import { google } from 'googleapis';
const nodemailer = require('nodemailer');

const { OAuth2 } = google.auth;

const emailadress = process.env.MAIL_ADRESS;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.SECRET_KEY;
const refreshToken = process.env.REFRESH_TOKEN;


const OAuth2_client = new OAuth2(clientId, clientSecret);
OAuth2_client.setCredentials({ refresh_token: refreshToken});

const acessToken = OAuth2_client.getAccessToken();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
      type: 'OAuth2',
      user: emailadress,
      clientId,
      clientSecret,
      refreshToken,
      acessToken
    },
    tls: {
      rejectUnauthorized: false, // Ignora erros de certificado autoassinado
    },
    
  });
  
type MailerParams = {
  name: any;
  email: string;
  message: string;
};


const mailer = ({ name, email, message }: MailerParams) => {
    const from = `${name} <${email}>`;
    const emailbody = {
        from,
        to:`${email}`,
        subject:`Nova menssagem de contato - ${name}`,
        text:`${message}`,
        replyTo: from
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(emailbody, (error: any, info: any ) => 
        error ? reject(error) : resolve(info)
        );
    });
};

 const sendEmail = async (req: any , res: any) => { 
    const { name, email, message } = req.body;
    if (email === '' || name === '' || message === ''){
        res.status(403).send();
        return; 
    }

    try {
      const mailerRes = await mailer({ name, email, message });
      res.send(mailerRes);
    } catch (error) {
      console.error(error);
      res.status(500).send('Ocorreu um erro ao enviar o email.');
    }
  };

export default sendEmail;