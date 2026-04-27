import { Controller, Get, Post, Body } from "@nestjs/common";

@Controller('tasks')
export class TasksController {
    @Get()
    getAllTasks() { }
    @Post()
    createTask(@Body() newTask: any) { }
}