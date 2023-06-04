import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

import { UserWithId, Users } from './users.model';

/** POST http://localhost:5000/api/users/register
 body : {
    "username": "",
    "password": "",
    "email": "",
    "firstname": "",
    "lastname": "",
    "mobile": "",
    "address": "",
    "profile": "",
 }
 */
export async function register(
  req: Request<{}, UserWithId>,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, password, email, profile } = req.body;

    // check the existing user and email
    const existUsername = await Users.findOne({ username });
    const existEmail = await Users.findOne({ email });

    // throw errors if user or email exist
    if (existUsername) {
      throw new Error('Please use unique Username');
    }
    if (existEmail) {
      throw new Error('Please use unique Email');
    }

    // Regist new user and hash the password
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 1);

      console.log('hashedPassword', hashedPassword);

      const user = await Users.insertOne({
        username,
        password: hashedPassword,
        email,
        profile: profile || '',
      });

      res.status(201);
      res.json({
        ...req.body,
        _id: user.insertedId,
      });
    }
  } catch (error) {
    next(error);
  }
}

/** POST http://localhost:5000/api/users/login
 body : {
    "username": "",
    "password": "",
 }
 */
export async function login(
  req: Request<{}, UserWithId>,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, password } = req.body;

    const user = await Users.findOne({ username });
    if (!user) return;

    // Compare password
    const comparePassword = await bcrypt.compare(
      password,
      user.password
    );

    // Check if password doesn't match
    if (!comparePassword) {
      res.status(400);
      throw new Error('password does not match');
    }

    const token = await jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: '24h' }
    );

    res.status(201);
    res.json({ username, token });
  } catch (error) {
    next(error);
  }
}

/** GET http://localhost:5000/api/users/:userid */
export async function getUser(
  req: Request<{ username: string }, UserWithId>,
  res: Response,
  next: NextFunction
) {
  try {
    const { username } = req.params;
    if (!username)
      return res.status(501).send({ error: 'Invalid username!' });

    const user = await Users.findOne({ username });
    if (!user)
      return res
        .status(501)
        .send({ error: "Couldn't find the User" });

    const { password, ...rest } = user;

    res.status(201);
    res.json(rest);
  } catch (error) {
    next(error);
  }
}

/** PUT http://localhost:5000/api/users/updateuser
 * @param : {
    "id": <userid>,
 }
 body: {
    "firstname": "",
    "address": "",
    "profile": "",
 }
 */
export async function updateUser(
  req: Request<{}, UserWithId, {}, { id: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.query;

    console.log('new Object(id)', new Object(id));

    const user = await Users.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: req.body },
      { returnDocument: 'after' }
    );

    if (!user.value) {
      res.status(404);
      throw new Error(`User with id ${id} not found`);
    }

    console.log('user', user);

    res.json(user.value);
  } catch (error) {
    next(error);
  }
}

/** GET http://localhost:5000/api/users/generate-otp */
export async function generateOtp(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    next(error);
  }
}

/** GET http://localhost:5000/api/users/verify-otp */
export async function verifyOtp(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    next(error);
  }
}

// successfully redirect user when OTP is valid
/** GET http://localhost:5000/api/users/reset-session */
export async function resetSession(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    next(error);
  }
}

/** PUT http://localhost:5000/api/users/reset-password */
export async function resetPassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    next(error);
  }
}
