import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { createPublicClient, createWalletClient, http } from 'viem';
import { mnemonicToAccount } from 'viem/accounts';
import { sepolia, mantleSepoliaTestnet, arbitrumSepolia } from 'viem/chains';

import { ContractsService } from '../contracts/contracts.service';

const chainsMap = {
  sepolia: sepolia,
  mantleSepoliaTestnet: mantleSepoliaTestnet,
  arbitrumSepolia: arbitrumSepolia,
};

interface AlTokeOFTArgs {
  name: string;
  endpointV2Address: `0x${string}`;
  initialSupply: bigint;
  symbol: string;
}

@Injectable()
export class ChainService {
  constructor(
    private readonly contractsService: ContractsService,
    private readonly configService: ConfigService,
  ) {}

  async deploy({
    chain,
    contractName,
    deployArgs,
  }: {
    chain: 'mantleSepoliaTestnet' | 'arbitrumSepolia' | 'sepolia';
    contractName: string;
    deployArgs: AlTokeOFTArgs;
  }): Promise<string> {
    const { abi, bytecode } = this.contractsService.findOne(contractName);

    const walletClient = this.getWalletClient(chain);
    const account = this.getAccount();

    const hash = await walletClient.deployContract({
      abi,
      account,
      args: [
        deployArgs.name, // name
        deployArgs.symbol, // symbol
        deployArgs.endpointV2Address, // endpointV2Address
        account.address, // owner
        account.address, // distributor
        deployArgs.initialSupply, // amount
      ],
      bytecode,
    });
    return hash;
  }

  private getAccount() {
    const walletsConfig = this.configService.get('wallets') as {
      deployerMnemonic: string;
    };
    const account = mnemonicToAccount(walletsConfig.deployerMnemonic);

    return account;
  }

  getWalletClient(
    chain: 'mantleSepoliaTestnet' | 'arbitrumSepolia' | 'sepolia',
  ) {
    const rpcUrl = this.configService.get('rpcUrls') as {
      mantleSepoliaTestnet: string;
      arbitrumSepolia: string;
      sepolia: string;
    };

    const url: string = rpcUrl[chain];

    const walletClient = createWalletClient({
      chain: chainsMap[chain],
      transport: http(url),
    });

    return walletClient;
  }

  getPublicClient(
    chain: 'mantleSepoliaTestnet' | 'arbitrumSepolia' | 'sepolia',
  ) {
    const rpcUrl = this.configService.get('rpcUrls') as {
      mantleSepoliaTestnet: string;
      arbitrumSepolia: string;
      sepolia: string;
    };

    const url: string = rpcUrl[chain];

    const walletClient = createPublicClient({
      chain: chainsMap[chain],
      transport: http(url),
    });

    return walletClient;
  }

  async getDeployAddress({
    txHash,
    chain,
  }: {
    chain: 'mantleSepoliaTestnet' | 'arbitrumSepolia' | 'sepolia';
    txHash: `0x${string}`;
  }): Promise<`0x${string}` | undefined> {
    const publicClient = this.getPublicClient(chain);

    const transactionReceipt = await publicClient.getTransactionReceipt({
      hash: txHash,
    });

    return transactionReceipt.contractAddress as `0x${string}` | undefined;
  }
}
