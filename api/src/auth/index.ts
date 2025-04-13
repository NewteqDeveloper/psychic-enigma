// I want to export common auth things from here, so that the path is just import from 'auth'
import { SecretAuthGuard } from './decos/secret.deco';
import { AllowAnonymousGuard } from './decos/anon.deco';
import { UserProvider } from './decos/user-context.deco';

export { SecretAuthGuard, AllowAnonymousGuard, UserProvider };
