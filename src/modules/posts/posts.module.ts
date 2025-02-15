import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { postsProviders } from './posts.providers';
import { PostsService } from './posts.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import { UsersService } from '../users/users.service';
import { modelProviders } from 'src/core/modelProviders';

@Module({
  providers: [PostsService, ...modelProviders, JwtStrategy, UsersService],
  controllers: [PostsController],
})
export class PostsModule {}
