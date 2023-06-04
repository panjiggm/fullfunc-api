import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

import ErrorResponse from './interfaces/ErrorResponse';
import RequestValidator from './interfaces/RequestValidator';
import { Users } from './api/users/users.model';

export function validateRequest(validator: RequestValidator) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (validator.params) {
        req.params = await validator.params.parseAsync(req.params);
      }
      if (validator.body) {
        req.body = await validator.body.parseAsync(req.body);
      }
      if (validator.query) {
        req.query = await validator.query.parseAsync(req.query);
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(422);
      }
      next(error);
    }
  };
}

export function notFound(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}

export async function verifyUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username } = req.method === 'GET' ? req.query : req.body;

    // check user existence
    const exist = await Users.findOne({ username });
    if (!exist) res.status(404).send({ error: "Can't find User!" });

    res.locals.user = exist;

    next();
  } catch (error) {
    res.status(404).send({ error: 'Authentication Error' });
    next(error);
  }
}
