import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getTasks(req: any): unknown;
    createTask(createTaskDto: CreateTaskDto, req: any): unknown;
}
