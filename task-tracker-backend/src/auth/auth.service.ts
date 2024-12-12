import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async signup(createUserDto: CreateUserDto): Promise<any> {
    const user = new this.userModel(createUserDto);
    await user.save();
    return { message: 'User created successfully' };
  }

  async login(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username });
    console.log('User:', user);
    console.log('Validate Password Function:', user?.validatePassword);
    if (!user || !(await user.validatePassword(password))) {
      throw new Error('Invalid credentials');
    }
    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
