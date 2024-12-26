import { Router } from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { BlogValidation } from './blog.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import { BlogController } from './blog.controller';

const router = Router();

router.post(
  '/',
  validateRequest(BlogValidation.createBlogValidationSchema),
  auth(USER_ROLE.user, USER_ROLE.admin),
  BlogController.createBlog
);

export const BlogRouter = router;
