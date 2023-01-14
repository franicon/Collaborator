import { registerAs } from '@nestjs/config';

export const Config = registerAs('', () => ({
  env: process.env.APP_ENV,
}));
