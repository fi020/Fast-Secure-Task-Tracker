import { Document } from 'mongoose';
export declare class Task extends Document {
    title: string;
    description: string;
    userId: string;
}
export declare const TaskSchema: any;
