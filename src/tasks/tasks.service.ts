import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
    private tasks: any[] = [];
    getAllTasks() {
        return this.tasks;
    }
    createTask(task: any) {
        const newTask = {
            id: this.tasks.length + 1,
            title: task.title,
            status: 'OPEN'
        };
        this.tasks.push(newTask);
        return newTask;

    }
}