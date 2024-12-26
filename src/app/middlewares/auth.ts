import { NextFunction, Request, Response } from 'express';

import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';

import { TUserRole } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';

import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../utils/catchAsync';
import AppError from '../error/AppError';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized!');
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;
    const { role, userEmail } = decoded;

    const user = await User.isUserExistsByEmail(userEmail);
    if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found!');
    }

    const isBlock = user?.isBlock;
    if (isBlock) {
      throw new AppError(StatusCodes.FORBIDDEN, 'This user is blocked!');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        'You are not authorized  hi!'
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (req as any).user = decoded as JwtPayload;
    next();
  });
};
export default auth;
