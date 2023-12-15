import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";

import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { UsersService } from "src/modules/users/users.service";
import { modelProviders } from "src/core/modelProviders";
import { UsersModule } from "../users/users.module";



@Module ({
    imports: [
        PassportModule,
        UsersModule,
        JwtModule.register({
            secret:process.env.JWTKEY,
            signOptions: { expiresIn: process.env.TOKEN_EXPIRATION},
        }),
        ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy,UsersService,...modelProviders]
})
export class AuthModule {}