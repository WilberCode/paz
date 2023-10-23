/*  
import type {NextApiRequest, NextApiResponse} from 'next'  
 

type Data  =  {
    message:Message
}


type ErrorData = {
    body: string
}

export default async function  handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | ErrorData> 
){
    /* if (req.method !== 'POST') {  
      res.status(405).json({body:'Method Not Allowed'})       
      return 
    }  
 
    const {message} = req.body

    const newMessage = {
        hello:'sw',
        created_at: Date.now()
    }  
 
    return res.status(200).json({message:newMessage}) 
} */

/* 
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';


import type { NextApiRequest, NextApiResponse } from 'next'
 


type ResponseData = {
  message: string
}
 
export default async function post(
  req: NextApiRequest,
  res: NextApiResponse<FormPropsContact>
) { */
 /*  const { nombre, apellido, correo, celular, mensaje } = await req.json(); */
/*   console.log(req);
  
  res.status(200).json({ nombre:'swq', apellido:'wsq', correo:'swqs', celular:'swqs', mensaje:'sqwswq' })
} */


import { type NextRequest, NextResponse } from 'next/server';
 
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export default async function POST(request:  NextRequest) {
 
  

  const body = request.body;
  const bodyText = await new Response(body).text();
  const { nombre, apellido, correo, celular, mensaje }: FormPropsContact = JSON.parse(bodyText);
 
  
  let mensaje_correo = ` 
                        |-------------------------------------
                         Nombre: ${nombre} \n
                         Apellido: ${apellido} \n
                         Correo: ${correo} \n
                         Celular: ${celular} \n
                         Mensaje: ${mensaje} \n
                         -------------------------------------|
                      ` 
  const transport = nodemailer.createTransport({
    service: 'gmail', 
      host: "smtp.gmail.com",
      port: 465,
      secure: true ,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Mensaje desde ${nombre} (${correo})`,
    text: mensaje_correo,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}