import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hightllevel@gmail.com',
    pass: process.env.mailPass,
  },

});

export default transporter;
