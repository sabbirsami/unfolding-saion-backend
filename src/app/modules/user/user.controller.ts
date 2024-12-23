import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import { UserService } from './user.service';

const createUser = catchAsync(async (req, res, _next) => {
  const result = await UserService.createUserIntoDB(req.body);
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'User created successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const UserController = {
  createUser,
};
