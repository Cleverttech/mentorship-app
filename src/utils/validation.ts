import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Gültige E-Mail-Adresse erforderlich'),
  password: z.string().min(6, 'Mindestens 6 Zeichen'),
});

export type LoginSchema = typeof loginSchema;
