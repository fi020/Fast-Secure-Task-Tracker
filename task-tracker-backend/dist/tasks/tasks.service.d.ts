import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    getTasks(userId: string): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
