import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().port().default(3000),

  THIRDWEB_NEBULA_CHAT_SECRET_KEY: Joi.string().required(),
  THIRDWEB_NEBULA_CHAT_ENDPOINT: Joi.string().uri().required(),

  COINGRECKO_API_KEY: Joi.string().required(),
  COINGRECKO_ENDPOINT: Joi.string().uri().required(),
});
