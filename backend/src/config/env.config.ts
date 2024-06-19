import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    API_PORT: process.env.API_PORT,
  };
});
