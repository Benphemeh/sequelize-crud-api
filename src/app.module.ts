import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';



@Module({
  imports: [AuthModule, BookmarkModule, DatabaseModule, ConfigModule.forRoot({isGlobal:true}), UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
