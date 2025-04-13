import { Request } from 'express';

export type UserRequest = Request & {
  mxid: string;
};
