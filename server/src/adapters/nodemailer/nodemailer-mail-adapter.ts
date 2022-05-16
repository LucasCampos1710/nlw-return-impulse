import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "91d180f3e62a75",
    pass: "d9147c93440370"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Lucas Campos <soluxcreative@gmail.com',
      subject,
      html: body
    })
  };
}