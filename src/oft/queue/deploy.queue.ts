import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Injectable()
export class DeployQueueService {
  constructor(@InjectQueue('deployQueue') private deployQueue: Queue) {}

  async addDeploy({ chainId, oftId }: { chainId: number; oftId: number }) {
    const job = await this.deployQueue.add('deployQueue', {
      chainId,
      oftId,
    });

    return job;
  }

}
