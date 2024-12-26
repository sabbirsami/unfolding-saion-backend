import { StatusCodes } from 'http-status-codes';
import config from '../../config';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';
import AppError from '../../error/AppError';
import { createToken } from './user.utils';

const createUserIntoDB = async (payload: TUser) => {
  // Set User Role
  payload.role = 'user';
  // insert into db
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByEmail(payload?.email);
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found !');
  }

  const isDeleted = user?.isBlock;
  if (isDeleted) {
    throw new AppError(StatusCodes.FORBIDDEN, 'This user is blocked!');
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(StatusCodes.FORBIDDEN, 'Password do not matched');

  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );
  return {
    accessToken,
    refreshToken,
  };
};

export const UserService = {
  createUserIntoDB,
  loginUser,
};
