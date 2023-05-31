import { NextFunction, Request, Response } from 'express';

/** POST http://localhost:5000/api/auth/register
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
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    next(error);
  }
}

/** POST http://localhost:5000/api/auth/login
 body : {
    "username": "",
    "password": "",
 }
 */
export async function login(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    next(error);
  }
}

/** GET http://localhost:5000/api/auth/user/jajang123 */
export async function getUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    next(error);
  }
}

/** PUT http://localhost:5000/api/auth/updateuser
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
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    next(error);
  }
}

/** GET http://localhost:5000/api/auth/generate-otp */
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

/** GET http://localhost:5000/api/auth/verify-otp */
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
/** GET http://localhost:5000/api/auth/reset-session */
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

/** PUT http://localhost:5000/api/auth/reset-password */
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
