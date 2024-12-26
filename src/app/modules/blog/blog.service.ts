import { TBlog } from './blog.interface';
import { BlogModel } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const blog = await BlogModel.create(payload);

  const result = await BlogModel.findById(blog._id)
    .populate('author', 'name email')
    .select('-isPublished -updatedAt -createdAt');

  return result;
};

export const BlogService = {
  createBlogIntoDB,
};
