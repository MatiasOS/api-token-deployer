import { registerAs } from '@nestjs/config';

export default registerAs('nebulaConfig', () => ({
  secretKey: process.env.THIRDWEB_NEBULA_CHAT_SECRET_KEY as string,
  endpoint: process.env.THIRDWEB_NEBULA_CHAT_ENDPOINT as string,
}));
