import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Injectable()
export class ConfigQueueService {
  constructor(@InjectQueue('configQueue') private configQueue: Queue) {}

  async addConfig({ oftId }: { chainId: number; oftId: number }) {
    const job = await this.configQueue.add('deployQueue', {
      oftId,
    });

    return job;
  }
}
