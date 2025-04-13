import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AdminValidateUserDto, CreateUserDto } from '@shared-ts/dto/user.dto';
import bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@shared-ts/database/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    private userService: UserService,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async createUser(createUser: CreateUserDto): Promise<void> {
    await this.userService.createUser(createUser);
  }

  async validatePassword(user: AdminValidateUserDto): Promise<boolean> {
    const userAtDb = await this.userRepo.findOne({
      where: { mxid: user.mxid },
    });
    if (!userAtDb) {
      return false;
    }
    return await bcrypt.compare(user.password, userAtDb.password);
  }
}
