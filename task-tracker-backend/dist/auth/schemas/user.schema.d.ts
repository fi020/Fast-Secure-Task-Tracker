import { Document } from 'mongoose';
export declare class User extends Document {
    username: string;
    password: string;
    validatePassword(password: string): Promise<boolean>;
}
export declare const UserSchema: any;
