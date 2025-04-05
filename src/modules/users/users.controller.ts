import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() createUserDto: UserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
  // @Get()
  // findAllUsers(): string {
  //   return this.userService.findAll();
  // }

  @Get(':id')
  findUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findOneById(Number(id));
  }
}
