import { z } from 'zod';
import { db } from '../../db';
import { WithId } from 'mongodb';

export const User = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  mobile: z.string().optional(),
  address: z.string().optional(),
  profile: z.string().optional(),
});

export type User = z.infer<typeof User>;
export type UserWithId = WithId<User>;
export const Users = db.collection<User>('users');
