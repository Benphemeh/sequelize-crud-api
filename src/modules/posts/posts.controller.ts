import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PostsService } from './posts.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import PostModel from 'src/core/database/models/post';

import { PostDto } from './dto/post.dto';
import { Request } from 'express';
import { Token } from '../auth/auth.service';
import { log } from 'console';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) { }

    @Get()
    async findAll() {
        return await this.postService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<PostModel> {
        const post = await this.postService.findOne(id);

        if (!post) {
            throw new NotFoundException('This Post doesn\'t exist');
        }
        return post;
    }

    @UseGuards(JwtStrategy)
    @Post()
    async create(@Body() post: PostDto, @Req() req: AuthUser): Promise<PostModel> {
      console.log(req.user);
      
        return await this.postService.create(post, req.user?.id);
    }

    @UseGuards(JwtStrategy)
    @Put(':id')
    async update(@Param('id') id: number, @Body() post: PostDto, @Req() req): Promise<PostModel> {
        const { numberOfAffectedRows, updatedPost } = await this.postService.update(id, post, req.user.id);
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }
        return updatedPost;
    }

    @UseGuards(JwtStrategy)
    @Delete(':id')
    async remove(@Param('id') id: number, @Req() req) {
        const deleted = await this.postService.delete(id, req.user.id);

        if (deleted === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        return 'Successfully deleted';
    }
}

interface AuthUser extends Request {
    user: Token;
}