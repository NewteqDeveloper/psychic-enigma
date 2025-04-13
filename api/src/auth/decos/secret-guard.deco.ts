import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import {SecretGuard} from "../guards/secret.guard";

export const ALLOW_SECRET_AUTH_KEY = 'allow-secret-auth';

/*
I'm creating the guard like this (as a standalone decorator),
so that the metadata is correctly attached,
allowing me to check for this in the  normal JWT guard
 */
export function SecretAuthGuard() {
  return applyDecorators(
    SetMetadata(ALLOW_SECRET_AUTH_KEY, true),
    UseGuards(SecretGuard),
  );
}
