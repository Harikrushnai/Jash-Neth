import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, phone_number, message, website_design, application_design, graphic_design, media_photography, video_production, other } = JSON.parse(req.body)

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

    let services = ""
    services += website_design ? "Website design, " : ""
    services += application_design ? "Application design, " : ""
    services += graphic_design ? "Graphic design, " : ""
    services += media_photography ? "Media & Photography, " : ""
    services += video_production ? "Video production, " : ""
    services += other ? "Other" : ""

    const mailOptions: Mail.Options = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `Message from ${name} (${email})`,
        text: `Phone Number: ${phone_number}
            \nMessage: ${message}
            \nSelected service(s): ${services}`
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