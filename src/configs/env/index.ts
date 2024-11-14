export const env = {
  salts: Number(process.env.PASSWORD_SALTS),
  jwtSecrets: process.env.JWT_SECRET ?? 'secret',
  jwtExpiration: process.env.JWT_EXPIRATION ?? '1d',
};
