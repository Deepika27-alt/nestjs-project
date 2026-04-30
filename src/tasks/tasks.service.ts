import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService {
    private tasks: any[] = [];
    getAllTasks() {
        return this.tasks;
    }
    async createTask(task: CreateTaskDto) {
        const newTask = {
            id: this.tasks.length + 1,
            title: task.title,
            status: 'OPEN'
        };
        this.tasks.push(newTask);
        return newTask;

    }
}