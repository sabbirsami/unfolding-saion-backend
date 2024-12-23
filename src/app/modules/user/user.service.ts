import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  // Set User Role
  payload.role = 'user';
  // insert into db
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByEmail(payload?.email);
  console.log(user);
};
export const UserService = {
  createUserIntoDB,
  loginUser,
};
