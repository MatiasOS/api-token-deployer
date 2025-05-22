import { Injectable } from '@nestjs/common';
import { AlTokeOFT } from './AlTokeOFT';
import { MerkleDistributor } from './MerkleDistributor';
import { Abi } from 'viem';

export interface Contract {
  contractName: string;
  abi: Abi;
  bytecode: `0x${string}`;
}

@Injectable()
export class ContractsService {
  findOne(name: string): Contract {
    const v = [AlTokeOFT, MerkleDistributor].find(
      ({ contractName }) => contractName === name,
    );

    if (!v) {
      throw new Error(`ContractsService: Contract ${name} not found`);
    }

    return v;
  }
}
