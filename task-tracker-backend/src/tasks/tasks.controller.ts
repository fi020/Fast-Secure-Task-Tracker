import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getTasks(@Request() req) {
    const userId = req.user.userId;
    return this.tasksService.getTasks(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto, @Request() req) {
    createTaskDto.userId = req.user.userId;
    return this.tasksService.createTask(createTaskDto);
  }
}
