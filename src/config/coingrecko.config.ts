import { registerAs } from '@nestjs/config';

export interface CoinGeckoConfig {
  apiKey: string;
  endpoint: string;
}

export default registerAs('coingreckoConfig', () => ({
  apiKey: process.env.COINGRECKO_API_KEY as string,
  endpoint: process.env.COINGRECKO_ENDPOINT as string,
}));
