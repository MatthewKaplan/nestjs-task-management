import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status-enum";
import { TasksService } from "./tasks.service";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { Task } from "./task.entity";
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getFilteredTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    updateTaskStatus(id: number, status: TaskStatus): Promise<Task>;
    deleteTask(id: number): Promise<void>;
}
