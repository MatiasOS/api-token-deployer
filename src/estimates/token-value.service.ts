import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Alchemy } from 'alchemy-sdk';
import { AlchemyConfig } from 'src/config/alchemy.config';

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
  private readonly alchemy: Alchemy;

  constructor(private readonly configService: ConfigService) {
    const { apiKey } = this.configService.get<AlchemyConfig>(
      'alchemyConfig',
    ) as AlchemyConfig;
    this.alchemy = new Alchemy({ apiKey });
  }

  async getTokenValue({ symbols }: { symbols: string[] }) {
    const { data } = await this.alchemy.prices.getTokenPriceBySymbol(symbols);
    return data;
  }
}
