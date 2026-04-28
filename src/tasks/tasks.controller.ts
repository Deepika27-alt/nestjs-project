import { Controller, Get, Post, Body } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { };
    @Get()
    getTasks() {
        return this.tasksService.getAllTasks();
    }
    @Post()
    addTask(@Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.createTask(createTaskDto);
    }
}