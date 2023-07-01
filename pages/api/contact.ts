import nodemailer from 'nodemailer';
import { google } from 'googleapis';


const { OAuth2 } = google.auth;

const email = process.env.MAIL_ADRESS;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.SECRET_KEY;
const refreshToken = process.env.REFRESH_TOKEN;

const OAuth2_client = new OAuth2(clientId, clientSecret);
OAuth2_client.setCredentials({ refresh_token: refreshToken});

const acessToken = OAuth2_client.getAccessToken();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: email,
      clientId,
      clientSecret,
      refreshToken,
      acessToken
    },
    tls: {
      rejectUnauthorized: false, 
    },
  });
  

const mailer = ({ senderMail, name, text }) => {
    const from = `${name} <${senderMail}>`;
    const message = {
        from,
        to:`${email}`,
        subject:`Nova menssagem de contato - ${name}`,
        text,
        replyTo: from
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) => 
        error ? reject(error) : resolve(info)
        );
    });
};

export default async (req , res) => { 
    const { senderMail, name, content } = req.body;
    if (senderMail === '' || name === '' || content === ''){
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