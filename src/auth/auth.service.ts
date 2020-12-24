import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne(username);

    if (user && user.password === password) {
      const { _id, username } = user;
      return { id: _id, username };
    }

    return null;
  }

  async login(user: any) {
    const payload = await this.validateUser(user.username, user.password);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}