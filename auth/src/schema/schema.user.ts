import { z } from 'zod';

export const querySchema = z.object({
  skip: z.preprocess(
    (val) => (val !== undefined ? Number(val) : 0),
    z.number().int().nonnegative().optional(),
  ),
});


export const bodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});