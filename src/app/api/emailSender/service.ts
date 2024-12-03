import nodemailer from 'nodemailer';

import { env } from '@/configs';

const { webmailEmail, webmailPass, webmailPort, webmailHost } = env;

export class EmailSenderService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: webmailHost,
      port: webmailPort,
      secure: webmailPort === 465,
      auth: {
        user: webmailEmail,
        pass: webmailPass,
      },
      tls: {
        rejectUnauthorized: webmailPort === 465,
      },
    });
  }

  async sendEmail(
    to: string,
    subject: string,
    text?: string,
    html?: string,
  ): Promise<void> {
    await this.transporter.sendMail({
      from: `"No Reply" <${webmailEmail}>`,
      to,
      subject,
      text,
      html,
    });
  }
}
