import { z } from 'zod';

export const querySchema = z.object({
  skip: z.preprocess(
    (val) => (val !== undefined ? Number(val) : 0),
    z.number().int().nonnegative().optional(),
  ),
});


export const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role : z.enum(['ADMIN', 'USER']),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});