import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, pass: string) {
    const user = await this.authService.validateUser(email, pass);
    if (!user) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return user;
  }
}
