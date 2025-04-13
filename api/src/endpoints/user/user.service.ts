import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@shared-ts/database/models/user.model';
import bcrypt from 'bcrypt';
import { CreateUserDto, UserDto } from '@shared-ts/dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async createUser({ mxid, password }: CreateUserDto): Promise<void> {
    const user = this.userRepo.create({
      mxid,
      password: await bcrypt.hash(password, 10),
    });
    await this.userRepo.save(user);
  }

  async assertUserCredentials(
    user: UserDto,
    unAuthMessage: string,
  ): Promise<User> {
    const currentUser = await this.userRepo.findOne({
      where: { mxid: user.mxid },
    });
    if (!currentUser) {
      throw new UnauthorizedException(unAuthMessage);
    }

    if (!(await bcrypt.compare(user.password, currentUser.password))) {
      throw new UnauthorizedException(unAuthMessage);
    }

    return currentUser;
  }
}
