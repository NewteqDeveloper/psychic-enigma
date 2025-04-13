import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthService } from './services/auth.service';
import { JwtGuard } from './guards/jwt.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy, JwtGuard],
  exports: [AuthService, JwtGuard],
})
export class AuthModule {}
