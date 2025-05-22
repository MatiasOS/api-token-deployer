import { registerAs } from '@nestjs/config';

export default registerAs('wallets', () => ({
  deployerMnemonic: process.env.DEPLOYER_MNEMONIC as string,
  deployerAddress: process.env.DEPLOYER_ADDRESS as string,
}));
