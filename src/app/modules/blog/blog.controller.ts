import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { BlogService } from './blog.service';
import { StatusCodes } from 'http-status-codes';

import AppError from '../../error/AppError';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = (req as any).user;

  if (!user) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'User not authenticated');
  }

  const data = { ...req.body, author: user.userId };
  const result = await BlogService.createBlogIntoDB(data);
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Blog updated successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const BlogController = {
  createBlog,
};