import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().port().default(3000),

  THIRDWEB_NEBULA_CHAT_SECRET_KEY: Joi.string().required(),
  THIRDWEB_NEBULA_CHAT_ENDPOINT: Joi.string().uri().required(),

  ALCHEMY_API_KEY: Joi.string().required(),

  RPC_URL_ARB_SEPOLIA: Joi.string().uri().required(),
  RPC_URL_SEPOLIA_TESTNET: Joi.string().uri().required(),
  RPC_URL_MANTLE_SEPOLIA: Joi.string().uri().required(),

  DEPLOYER_MNEMONIC: Joi.string().required(),
  DEPLOYER_ADDRESS: Joi.string().required(),

  DB_CONNECTION_STRING: Joi.string().required(),

  PG_ADMIN_EMAIL: Joi.string().email().required(),
  PG_ADMIN_PASSWORD: Joi.string().min(8).required(),
  QUEUE_HOST: Joi.string(),
  QUEUE_PORT: Joi.number(),
});
