import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';
import { SupportedContractNames } from 'src/shared/types/contracts.types';

@Injectable()
export class DeployQueueService {
  constructor(@InjectQueue('deployQueue') private deployQueue: Queue) {}

  async addDeploy({
    chainId,
    contractName,
    oftId,
    name,
    symbol,
    endpointV2Address,
    oftPeerId,
    initialSupply,
  }: {
    chainId: number;
    oftId: number;
    contractName: SupportedContractNames;
    name: string;
    symbol: string;
    endpointV2Address: `0x${string}`;
    oftPeerId: number;
    initialSupply: string;
  }) {
    const job = await this.deployQueue.add('deployQueue', {
      chainId,
      contractName,
      oftId,
      name,
      symbol,
      endpointV2Address,
      oftPeerId,
      initialSupply,
    });

    return job;
  }
}
