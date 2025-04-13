import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { SecretAuthGuard } from '@auth';
import { AdminValidateUserDto, CreateUserDto } from '@shared-ts/dto/user.dto';

@Controller('admin/secret')
@SecretAuthGuard()
export class AdminSecretController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  ping() {
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
