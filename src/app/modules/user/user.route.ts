import { Router } from 'express';
import { UserController } from './user.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = Router();

router.post(
  '/register',
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.createUser
);

router.post(
  '/login',
  validateRequest(UserValidation.loginUserValidationSchema),
  UserController.loginUser
);

export const UserRoute = router;
