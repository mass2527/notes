import { z } from 'zod';

const envVariables = z.object({
  POSTGRES_URL: z.string(),
  NODE_ENV: z.enum(['development', 'production']),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
