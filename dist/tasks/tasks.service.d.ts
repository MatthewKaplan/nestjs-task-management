import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getFilteredTasks(filterDto: GetTasksFilterDto): Task[];
    getTaskById(id: number): Task;
    deleteTaskById(id: number): void;
    createTask(createTaskDto: CreateTaskDto): Task;
    updateTaskStatus(id: number, status: TaskStatus): Task;
}
