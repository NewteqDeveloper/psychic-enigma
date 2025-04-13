import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthService } from './services/auth.service';
import { JwtGuard } from './guards/jwt.guard';
import { AuthController } from './controllers/auth.controller';
import { UserService } from '../endpoints/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@shared-ts/database/models/user.model';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, JwtStrategy, JwtGuard, UserService],
  controllers: [AuthController],
  exports: [AuthService, JwtGuard],
})
export class AuthModule {}
