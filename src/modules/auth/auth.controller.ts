import { Controller, Post, UseGuards, Request, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { UserDto } from "src/modules/users/dto/user.dto";
import { DoesUserExist } from "src/core/guard/doesUserExist.guard";
import { LocalAuthGuard } from "./localGuard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }
   
    @UseGuards(DoesUserExist)
    @Post('signup')
    async signUp(@Body() user: UserDto) {
        return await this.authService.create(user);
    }
  
}