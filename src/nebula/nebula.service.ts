import { Injectable } from '@nestjs/common';

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

@Injectable()
export class NebulaService {
  async create(message: string): Promise<NebulaResponse> {
    const { THIRDWEB_NEBULA_CHAT_SECRET_KEY, THIRDWEB_NEBULA_CHAT_ENDPOINT } =
      process.env;
    const res = await fetch(THIRDWEB_NEBULA_CHAT_ENDPOINT!, {
      method: 'POST',
      headers: {
        'x-secret-key': THIRDWEB_NEBULA_CHAT_SECRET_KEY!,
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
