import * as Joi from 'joi';

export const validationSchema = Joi.object({
  THIRDWEB_NEBULA_CHAT_SECRET_KEY: Joi.string().required(),
  THIRDWEB_NEBULA_CHAT_ENDPOINT: Joi.string().uri().required(),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().port().default(3000),
});
