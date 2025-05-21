import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CoinGeckoConfig } from 'src/config/coingrecko.config';

export interface CoinValueResponse {
  id: string;
  symbol: string;
  name: string;
  market_data: {
    current_price: {
      usd: number;
    };
  };
}

@Injectable()
export class TokenValueService {
  constructor(private readonly configService: ConfigService) {}

  async getTokenValue(tokenId: string): Promise<number> {
    const coinGeckoConfig =
      this.configService.get<CoinGeckoConfig>('coingreckoConfig');
    if (
      !coinGeckoConfig ||
      !coinGeckoConfig.endpoint ||
      !coinGeckoConfig.apiKey
    ) {
      throw new Error('Coingrecko configuration is missing or incomplete.');
    }

    const url = `${coinGeckoConfig.endpoint}/coins/${tokenId}`;

    console.log('URL:', url);

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'x-cg-demo-api-key': coinGeckoConfig.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data: CoinValueResponse = (await res.json()) as CoinValueResponse;
    return data.market_data.current_price.usd;
  }
}
