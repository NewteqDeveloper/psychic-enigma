import { Body, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AutoController } from '@decos';
import { SecretAuthGuard } from '@auth';
import { AdminValidateUserDto, CreateUserDto } from '@shared-ts/dto/user.dto';

@AutoController(AdminController)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  ping() {
    return {
      ping: 'pong',
    };
  }

  @SecretAuthGuard()
  @Get('secret')
  pingsecret() {
    return {
      ping: 'secret pong',
    };
  }

  @SecretAuthGuard()
  @Post('user/create')
  async createManualUser(@Body() user: CreateUserDto): Promise<void> {
    await this.adminService.createUser(user);
  }

  @SecretAuthGuard()
  @Post('user/validate')
  async validatePassword(@Body() user: AdminValidateUserDto): Promise<any> {
    return {
      valid: await this.adminService.validatePassword(user),
    };
  }
}
