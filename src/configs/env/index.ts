export const env = {
  salts: Number(process.env.PASSWORD_SALTS),
  jwtSecrets: process.env.JWT_SECRET ?? 'secret',
  jwtExpiration: process.env.JWT_EXPIRATION ?? '1d',
  webmailEmail: process.env.WEBMAIL_EMAIL,
  webmailPass: process.env.WEBMAIL_PASS,
  webmailHost: process.env.WEBMAIL_HOST,
  webmailPort: Number(process.env.WEBMAIL_PORT) ?? 465,
};
