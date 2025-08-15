import { config } from 'dotenv';
import { z } from 'zod';

// Load environment variables from .env file
config();

const EnvSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  MODEL_ID: z.string().min(1).default('sentence-transformers/all-MiniLM-L6-v2'),
  HF_TOKEN: z.string().min(1),
  LOG_LEVEL: z
    .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace'])
    .default('info'),
});

export type AppEnv = z.infer<typeof EnvSchema>;
export const env: AppEnv = EnvSchema.parse(process.env);
