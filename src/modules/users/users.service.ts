import { Injectable, Inject } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';
import User from 'src/core/database/models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async createUser(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}
