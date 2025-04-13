import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthService } from './services/auth.service';
import { JwtAuthGuard } from './guards/jwt-auth-guard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@shared-ts/database/models/user.model';
import { UserService } from '../endpoints/user/user.service';
import { AuthLoginController } from './controllers/login.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard, UserService],
  controllers: [AuthLoginController],
  exports: [AuthService, JwtAuthGuard],
})
export class AuthModule {}
