import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async(to: string, html: string) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'junayed.developer@gmail.com',
            pass: "jfof sxyy zhdn ggcu" // Replace this with the app password
        }
    })
    


    await transporter.sendMail({
        from: 'junayed.developer@gmail.com',
        to,
        subject: 'Reset your pasword within ten mins!',
        text: '',
        html
    })
}