import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@shared-ts/database/models/user.model';
import bcrypt from 'bcrypt';
import { CreateUserDto } from '@shared-ts/dto/user.dto';

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
}
