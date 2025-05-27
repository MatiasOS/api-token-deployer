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
import {
  type Chain,
  sepolia,
  mantleSepoliaTestnet,
  arbitrumSepolia,
} from 'viem/chains';

import { ContractsService } from '../contracts/contracts.service';
import { SupportedChainId } from '../types/chainId.types';
import { RpcUrls } from 'src/config/rpc.config';

@Injectable()
export class ChainService {
  private readonly viemChainMap: Record<SupportedChainId, Chain> = {
    11155111: sepolia,
    5003: mantleSepoliaTestnet,
    421614: arbitrumSepolia,
  };
  constructor(
    private readonly contractsService: ContractsService,
    private readonly configService: ConfigService,
  ) {}

  async deploy({
    chainId,
    contractName,
    deployArgs,
  }: {
    chainId: SupportedChainId;
    contractName: string;
    deployArgs: unknown[];
  }): Promise<string> {
    const { abi, bytecode } = this.contractsService.findOne(contractName);

    const walletClient = this.getWalletClient(chainId);
    const account = this.getAccount();

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

  getWalletClient(chainId: SupportedChainId) {
    const rpcUrl = this.configService.get('rpcUrls') as RpcUrls;

    const url: string = rpcUrl[chainId];

    const walletClient = createWalletClient({
      chain: this.viemChainMap[chainId],
      transport: http(url),
    });

    return walletClient;
  }

  getPublicClient(chainId: SupportedChainId) {
    const rpcUrl = this.configService.get('rpcUrls') as RpcUrls;

    const url: string = rpcUrl[chainId];

    const walletClient = createPublicClient({
      chain: this.viemChainMap[chainId],
      transport: http(url),
    });

    return walletClient;
  }

  async getDeployAddress({
    txHash,
    chainId,
  }: {
    chainId: SupportedChainId;
    txHash: `0x${string}`;
  }): Promise<`0x${string}` | undefined> {
    const publicClient = this.getPublicClient(chainId);

    const transactionReceipt = await publicClient.getTransactionReceipt({
      hash: txHash,
    });

    return transactionReceipt.contractAddress as `0x${string}` | undefined;
  }

  getContract({
    address,
    chainId,
    contractName,
  }: {
    address: `0x${string}`;
    chainId: SupportedChainId;
    contractName: string;
  }) {
    const { abi } = this.contractsService.findOne(contractName);
    const publicClient = this.getPublicClient(chainId);
    const walletClient = this.getWalletClient(chainId);

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
