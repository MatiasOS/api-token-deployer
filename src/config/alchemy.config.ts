import { registerAs } from '@nestjs/config';

export interface AlchemyConfig {
  apiKey: string;
}

export default registerAs('alchemyConfig', () => ({
  apiKey: process.env.ALCHEMY_API_KEY as string,
}));
