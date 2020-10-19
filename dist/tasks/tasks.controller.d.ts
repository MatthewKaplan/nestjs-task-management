import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getFilteredTasks(filterDto: GetTasksFilterDto): Task[];
    getTaskById(id: number): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
    updateTaskStatus(id: number, status: TaskStatus): Task;
    deleteTask(id: number): void;
}
