import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/users.service';

export interface Token {
    id:number
    email:string
}
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(email: string, pass: string) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            return null;
        }

        const match = await this.comparePassword(pass, user.password);
        if (!match) {
            return null;
        }

        const { password, ...result } = user.dataValues
        return result;
    }

    public async login(user) {
        const token = await this.generateToken(user);
        return { user, token };
    }

    public async create(user) {
       try {
        const pass = await this.hashPassword(user.password);

        const newUser = await this.userService.create({ ...user, password: pass });

        const { password, ...result } = newUser['dataValues'];

        const token = await this.generateToken({id:result.id, email:result.email});

        return { user: result, token };
       } catch (error) {
        console.log(error, 'error')
       }
    }

    private async generateToken(user : Token) {
        const token = await this.jwtService.sign({...user}, {secret:'aaa', expiresIn:'10mins'});
        return token;
    }

    private async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }

    private async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }
}