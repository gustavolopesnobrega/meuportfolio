import nodemailer from 'nodemailer'

export default async function ContactAPI(req:any, res:any) {
  const {name, email, message } = req.body;

  const data = {
    name, email, message
  };

  const transporter = nodemailer.createTransport({
    host: process.env.MAILADRESS,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILADRESS,
      pass: process.env.CLIENT_SECRET
    }
  });

  try{
    const mail = await transporter.sendMail({
      from: process.env.MAILADRESS,
      to: "devgustavonobrega@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html:`
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `
    })
    
    console.log("Message sent:", mail.messageId);

  }catch(error) {
    console.log(error);
    res.status(500).json({
      message: "Could not send the email."
    })
  }

}