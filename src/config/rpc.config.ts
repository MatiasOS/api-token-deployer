import { registerAs } from '@nestjs/config';

export default registerAs('rpcUrls', () => ({
  mantleSepoliaTestnet: process.env.RPC_URL_MANTLE_SEPOLIA as string,
  arbitrumSepolia: process.env.RPC_URL_ARB_SEPOLIA as string,
  sepolia: process.env.RPC_URL_SEPOLIA_TESTNET as string,
}));
