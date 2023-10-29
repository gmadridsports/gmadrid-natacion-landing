import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');
export async function POST(request: NextRequest) {

    // return NextResponse.json({ message: "Success: email was sent" })
    const smtpAddress = process.env.SMTP_ADDRESS;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUsername = process.env.SMTP_USERNAME;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const myEmail = process.env.SMTP_MY_EMAIL;

    const formData = await request.formData();
    const name = formData.get('name');
    const brandModel = formData.get('brandModel');
    const email = formData.get('email');
    const captchaToken = formData.get('g-recaptcha-response');

    const transporter = nodemailer.createTransport({
        host: smtpAddress,
        port: smtpPort,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: smtpUsername,
            pass: smtpPassword
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: myEmail,
            to: myEmail,
            replyTo: myEmail,
            subject: `Nueva solicitud de la beta`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Brand Model: ${brandModel} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: 'Unexpected error while sendind the message' }, { status: 500 });
    }
}