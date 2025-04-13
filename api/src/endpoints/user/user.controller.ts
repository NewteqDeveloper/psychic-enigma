import { UserService } from './user.service';
import { AutoController } from '@decos';

@AutoController(UserController)
export class UserController {
  constructor(private readonly userService: UserService) {}
}
