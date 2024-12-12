import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signup(createUserDto: CreateUserDto): Promise<any>;
    login(username: string, password: string): Promise<any>;
}
