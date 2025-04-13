import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserRequest } from '../../models/auth/user.request';

export const UserProvider = createParamDecorator(
  (_: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest<UserRequest>();
  },
);
