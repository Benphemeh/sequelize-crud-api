import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: any) {}

  @Get()
  findAllUsers(): string {
    return this.userService.findAll();
  }
}
