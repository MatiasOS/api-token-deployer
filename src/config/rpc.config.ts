import { registerAs } from '@nestjs/config';
import { SupportedChainId } from 'src/shared/types/chainId.types';
import { sepolia, mantleSepoliaTestnet, arbitrumSepolia } from 'viem/chains';

export default registerAs(
  'rpcUrls',
  () =>
    ({
      [mantleSepoliaTestnet.id]: process.env.RPC_URL_MANTLE_SEPOLIA as string,
      [arbitrumSepolia.id]: process.env.RPC_URL_ARB_SEPOLIA as string,
      [sepolia.id]: process.env.RPC_URL_SEPOLIA_TESTNET as string,
    }) as Record<SupportedChainId, string>,
);

export type RpcUrls = Record<SupportedChainId, string>;
