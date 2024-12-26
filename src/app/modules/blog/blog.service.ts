import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/AppError';
import { TBlog } from './blog.interface';
import { BlogModel } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const blog = await BlogModel.create(payload);

  const result = await BlogModel.findById(blog._id)
    .populate('author', 'name email')
    .select('-isPublished -updatedAt -createdAt');

  return result;
};

const updateBlogFromDB = async (id: string, payload: TBlog) => {
  const isBlogExists = await BlogModel.findById(id);

  if (!isBlogExists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Blog not found');
  }
  if (payload.isPublished) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Blog not found');
  }

  const blog = await BlogModel.findByIdAndUpdate(id, payload, {
    new: true,
  })
    .populate('author', 'name email')
    .select('-isPublished -updatedAt -createdAt');
  return blog;
};

export const BlogService = {
  createBlogIntoDB,
  updateBlogFromDB,
};
