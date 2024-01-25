import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { first_name, last_name, email, phone_number, message } = JSON.parse(req.body)

    const transport = nodemailer.createTransport({
        service: 'gmail',
        /* 
            setting service as 'gmail' is same as providing these setings:

            host: "smtp.gmail.com",
            port: 465,
            secure: true

            If you want to use a different email provider other than gmail, you need to provide these manually.
            Or you can go use these well known services and their settings at
            https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
        */
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `Careers: Message from ${first_name + " " + last_name} (${email})`,
        text: `Phone Number: ${phone_number}
            \nMessage: ${message}`
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
        return res.json({ message: 'Thank you for your submission!' })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}