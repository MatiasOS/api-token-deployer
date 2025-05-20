import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface NebulaResponse {
  message: string;
  actions: {
    session_id: string;
    request_id: string;
    type: string;
    source: string;
    data: string;
  }[];
  session_id: string;
  request_id: string;
}

interface NebulaConfig {
  secretKey: string;
  endpoint: string;
}

@Injectable()
export class NebulaService {
  constructor(private readonly configService: ConfigService) {}

  async create(message: string): Promise<NebulaResponse> {
    const nebulaConfig = this.configService.get<NebulaConfig>('nebulaConfig');
    if (!nebulaConfig || !nebulaConfig.endpoint || !nebulaConfig.secretKey) {
      throw new Error('Nebula configuration is missing or incomplete.');
    }

    const res = await fetch(nebulaConfig.endpoint, {
      method: 'POST',
      headers: {
        'x-secret-key': nebulaConfig.secretKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        stream: false,
      }),
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data: NebulaResponse = (await res.json()) as NebulaResponse;
    return data;
  }
}
