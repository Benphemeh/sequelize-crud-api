import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: any) {}

  @Post()
  createUser(@Body() createUserDto: any): string {
    return this.userService.create(createUserDto);
  }
  @Get()
  findAllUsers(): string {
    return this.userService.findAll();
  }

  @Get(':id')
  findUserById(@Param('id') id: string): string {
    return this.userService.findById(id);
  }
}
