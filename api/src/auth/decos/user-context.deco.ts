import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserProvider = createParamDecorator(
  (_: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log(request);
    return request;
  },
);
