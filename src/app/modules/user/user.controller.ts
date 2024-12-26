import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import { UserService } from './user.service';
import config from '../../config';

const createUser = catchAsync(async (req, res, _next) => {
  const result = await UserService.createUserIntoDB(req.body);
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'User created successfully',
    statusCode: StatusCodes.OK,
    data: { _id: result._id, name: result.name, email: result.email },
  });
});
const loginUser = catchAsync(async (req, res, _next) => {
  const result = await UserService.loginUser(req.body);
  const { refreshToken, accessToken } = result;
  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'User created successfully',
    statusCode: StatusCodes.OK,
    data: {
      accessToken,
    },
  });
});

export const UserController = {
  createUser,
  loginUser,
};
