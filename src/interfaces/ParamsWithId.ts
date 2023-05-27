import { ObjectId } from 'mongodb';
import { z } from 'zod';

export const ParamsWithId = z.object({
  id: z
    .string()
    .min(1)
    .refine(
      (val) => {
        try {
          return new ObjectId(val);
        } catch (error) {
          return false;
        }
      },
      {
        message: 'Invalid Object Id',
      }
    ),
});

export type ParamsWithId = z.infer<typeof ParamsWithId>;
