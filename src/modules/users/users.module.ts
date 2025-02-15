import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { modelProviders } from 'src/core/modelProviders';

@Module({
  providers: [UsersService, ...modelProviders],
  exports: [UsersService],
})
export class UsersModule {}
