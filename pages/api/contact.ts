
import { google } from 'googleapis';
const nodemailer = require('nodemailer');

const { OAuth2 } = google.auth;

const email = process.env.MAIL_ADRESS;

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
      user: email,
      clientId,
      clientSecret,
      refreshToken,
      acessToken,
      expires: 1484314697598
      
    },
    tls: {
      rejectUnauthorized: false, // Ignora erros de certificado autoassinado
    },
    
  });
  
type MailerParams = {
  senderMail: any;
  name: string;
  text: string;
};


const mailer = async ({ senderMail, name, text }: MailerParams) => {
    const from = `${name} <${senderMail}>`;

    const message = {
        from,
        to:`${email}`,
        subject:`Nova menssagem de contato - ${name}`,
        text,
        replyTo: email
    };
    return await new Promise((resolve, reject) => {
        transporter.sendMail(message, (error: any, info: any ) => 
        error ? reject(error) : resolve(info)
        );
    });
};

 const sendEmail = async (req: any , res: any) => { 
    const { senderMail, name, content } = req.body;
    if (senderMail.length < 3 || name.length < 3 || content.length < 5){
        res.status(403).send();
        return; 
    }
    try {
      const mailerRes = await mailer({ senderMail, name, text: content });
      res.send(mailerRes);
      
    } catch (error) {
      console.error(error);
      res.status(500).send('Ocorreu um erro ao enviar o email.');
    }
  };

export default sendEmail;