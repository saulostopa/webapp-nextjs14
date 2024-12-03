import nodemailer from 'nodemailer';

import { env } from '@/configs';

const { webmailEmail, webmailPass, webmailPort, webmailHost } = env;

export class EmailSenderService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport(
      `smtp://${webmailEmail}:${webmailPass}@${webmailHost}.com:${webmailPort}`,
    );
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
