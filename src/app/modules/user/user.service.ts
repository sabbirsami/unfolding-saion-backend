import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDB = async (payload: Partial<TUser>) => {
  // Set User Role
  payload.role = 'user';
  // insert into db
  const result = await UserModel.create(payload);
  return result;
};

export const UserService = {
  createUserIntoDB,
};
