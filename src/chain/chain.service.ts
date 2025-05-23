import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import {
  createPublicClient,
  createWalletClient,
  getContract,
  http,
  nonceManager,
} from 'viem';
import { mnemonicToAccount } from 'viem/accounts';
import { sepolia, mantleSepoliaTestnet, arbitrumSepolia } from 'viem/chains';

import { ContractsService } from '../contracts/contracts.service';

const chainsMap = {
  sepolia: sepolia,
  mantleSepoliaTestnet: mantleSepoliaTestnet,
  arbitrumSepolia: arbitrumSepolia,
};

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
    deployArgs: unknown[];
  }): Promise<string> {
    const { abi, bytecode } = this.contractsService.findOne(contractName);

    const walletClient = this.getWalletClient(chain);
    const account = this.getAccount();
    console.log('chain:', chain);
    console.log(deployArgs);
    try {
      const hash = await walletClient.deployContract({
        abi,
        account,
        args: deployArgs,
        bytecode,
      });
      return hash;
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      return e.message;
    }
  }

  getAccount() {
    const walletsConfig = this.configService.get('wallets') as {
      deployerMnemonic: string;
    };
    const account = mnemonicToAccount(walletsConfig.deployerMnemonic, {
      nonceManager,
    });

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

  getContract({
    address,
    chain,
    contractName,
  }: {
    address: `0x${string}`;
    chain: 'mantleSepoliaTestnet' | 'arbitrumSepolia' | 'sepolia';
    contractName: string;
  }) {
    const { abi } = this.contractsService.findOne(contractName);
    const publicClient = this.getPublicClient(chain);
    const walletClient = this.getWalletClient(chain);

    const contract = getContract({
      address,
      abi,
      client: {
        public: publicClient,
        wallet: walletClient,
      },
    });

    return contract;
  }
}
