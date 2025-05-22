import { registerAs } from '@nestjs/config';

export default registerAs('rpcUrls', () => ({
  mantleSepoliaTestnet: 'https://rpc.sepolia.mantle.xyz/',
  arbitrumSepolia: process.env.RPC_URL_ARB_SEPOLIA as string,
  sepolia: process.env.RPC_URL_SEPOLIA_TESTNET as string,
}));
