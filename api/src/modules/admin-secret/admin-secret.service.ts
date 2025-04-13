import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@shared-ts/database/models/user.model';

@Injectable()
export class AdminSecretService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async createUser(mxid: string) {
    const user = this.userRepo.create({
      mxid,
      password: '123456',
    });
    await this.userRepo.save(user);
  }
}
