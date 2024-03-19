import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { email, subject, companyName, contactPerson, contactNumber, companyAddress } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        })

        const mailOption = {
            from: process.env.EMAIL,
            to: 'yanyanbucod@gmail.com',
            subject: 'Account Registration Request',
            html: `
                <h3>Credentials</h3>
                <li>Subject: ${subject}</li>
                <li>Company Name: ${companyName}</li>
                <li>Email: ${email}</li>
                <li>Contact Person: ${contactPerson}</li>
                <li>Contact Number: ${contactNumber}</li>
                <li>Company Address: ${companyAddress}</li>
            `
        }

        await transporter.sendMail(mailOption);

        return NextResponse.json({ message: 'Email Sent Successfully' }, { status: 200 });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ message: 'Failed to Send Email' }, { status: 500 });
    }
}
