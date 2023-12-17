import { NextResponse, NextRequest } from 'next/server'
import {verify} from 'hcaptcha';

const nodemailer = require('nodemailer');
export async function POST(request: NextRequest) {
    // return NextResponse.json({ message: "Success: email was sent" })
    const smtpAddress = process.env.SMTP_ADDRESS;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUsername = process.env.SMTP_USERNAME;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const myEmail = process.env.SMTP_MY_EMAIL;

    const formData = await request.formData();
    const email = formData.get('email');
    const captchaToken = formData.get('g-recaptcha-response')?.toString() ?? '';

    const captchaVerified = await verify(process.env.CAPTCHA_SECRET ?? '', captchaToken, undefined, process.env.CAPTCHA_SITE_KEY);
    if (!captchaVerified.success) {
        return NextResponse.json({ error: 'Captcha incorrecto' }, { status: 400 });
    }

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
            subject: `Solicitud de borrado de datos`,
            html: `
            <p>Email: ${email} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        return NextResponse.json({ error: 'Error al guardar tu petición. ¡Contacta a Matteo!'}, { status: 500 });
    }
}